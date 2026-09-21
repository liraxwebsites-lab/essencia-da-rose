/* =========================================================================
   Essência da Rose — Loja (landing page)
   Dados: js/products.js (window.CATALOG)
   Carrinho: localStorage + checkout via WhatsApp (sem pagamento no site)
   ========================================================================= */

const CONFIG = {
  // WhatsApp que recebe os pedidos (55 + DDD + número)
  whatsapp: "5521988156755", // +55 21 98815-6755
  storeName: "Essência da Rose",
  sellerName: "Rose",
  currency: "R$"
};

let CATALOG = window.CATALOG || [];
const PRODUCT_IMAGES = window.PRODUCT_IMAGES || {};
const CART_KEY = "essencia_cart_v1";

/* ------------------------------- utils ---------------------------------- */

function formatPrice(value) {
  const n = Number(value) || 0;
  return CONFIG.currency + " " + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function placeholder() {
  return "imagens/produtos/placeholder.jpg";
}

function imageForCode(code) {
  return code && PRODUCT_IMAGES[code] ? PRODUCT_IMAGES[code] : "";
}

function productImage(product, option) {
  return (option && (imageForCode(option.code) || option.image))
    || (option && option.image)
    || product.image
    || imageForCode(product.options[0] && product.options[0].code)
    || placeholder();
}

function minPrice(product) {
  return Math.min(...product.options.map(o => o.price));
}

function maxPrice(product) {
  return Math.max(...product.options.map(o => o.price));
}

function priceLabel(product) {
  return minPrice(product) === maxPrice(product)
    ? formatPrice(minPrice(product))
    : "a partir de " + formatPrice(minPrice(product));
}

function getProduct(id) {
  return CATALOG.find(p => String(p.id) === String(id));
}

function getOption(product, code) {
  return product.options.find(o => o.code === code);
}

/* ------------------------------- cart ----------------------------------- */

function readCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch (e) {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCartButton();
  renderCartDrawer();
}

function addToCart(id, code, qty) {
  qty = Math.max(1, parseInt(qty, 10) || 1);
  const cart = readCart();
  const existing = cart.find(i => String(i.id) === String(id) && i.code === code);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: id, code: code, qty: qty });
  }
  writeCart(cart);
  openCart();
}

function changeQty(index, delta) {
  const cart = readCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty < 1) cart.splice(index, 1);
  writeCart(cart);
}

function removeItem(index) {
  const cart = readCart();
  cart.splice(index, 1);
  writeCart(cart);
}

function cartDetail() {
  const cart = readCart();
  const items = [];
  let total = 0;
  cart.forEach((item, index) => {
    const product = getProduct(item.id);
    if (!product) return;
    const option = getOption(product, item.code) || product.options[0];
    const line = option.price * item.qty;
    total += line;
    items.push({
      index: index,
      product: product,
      option: option,
      qty: item.qty,
      line: line
    });
  });
  return { items: items, total: total };
}

/* ----------------------------- whatsapp --------------------------------- */

function buildWhatsAppMessage() {
  const detail = cartDetail();
  if (!detail.items.length) return "";
  const lines = [];
  lines.push("Olá, " + CONFIG.sellerName + "! Vim pelo site e gostaria de fazer um pedido:");
  lines.push("");
  detail.items.forEach((it, idx) => {
    lines.push(
      (idx + 1) + ") " + it.qty + "x " + it.product.name + " — " + it.option.label +
      " (cód. " + it.option.code + ")"
    );
    lines.push("    " + formatPrice(it.option.price) + " cada = " + formatPrice(it.line));
  });
  lines.push("");
  lines.push("Total: " + formatPrice(detail.total));
  lines.push("");
  lines.push("— " + CONFIG.storeName + " 🌹");
  return lines.join("\n");
}

function checkoutWhatsApp() {
  const message = buildWhatsAppMessage();
  if (!message) {
    alert("Seu carrinho está vazio.");
    return;
  }
  const url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

/* --------------------------- cart UI (nav + drawer) --------------------- */

function injectCartUI() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks && !document.getElementById("cart-toggle")) {
    const btn = document.createElement("button");
    btn.id = "cart-toggle";
    btn.className = "cart-toggle";
    btn.type = "button";
    btn.innerHTML = 'Carrinho <span id="cart-count" class="cart-count">0</span>';
    btn.addEventListener("click", openCart);
    navLinks.appendChild(btn);
  }

  if (!document.getElementById("cart-drawer")) {
    const drawer = document.createElement("div");
    drawer.id = "cart-drawer";
    drawer.className = "cart-drawer";
    drawer.innerHTML =
      '<div class="cart-overlay" data-close></div>' +
      '<aside class="cart-panel" role="dialog" aria-label="Carrinho">' +
        '<header class="cart-header">' +
          '<h2>Seu carrinho</h2>' +
          '<button type="button" class="cart-close" data-close aria-label="Fechar">&times;</button>' +
        '</header>' +
        '<div id="cart-items" class="cart-items"></div>' +
        '<footer class="cart-footer">' +
          '<div class="cart-total"><span>Total</span><strong id="cart-total">R$ 0,00</strong></div>' +
          '<button type="button" class="btn-primary cart-checkout" onclick="checkoutWhatsApp()">Finalizar pelo WhatsApp</button>' +
          '<p class="cart-note">O pedido é concluído pelo WhatsApp. O site não processa pagamento.</p>' +
        '</footer>' +
      '</aside>';
    document.body.appendChild(drawer);

    drawer.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeCart();
    });
  }
  renderCartButton();
  renderCartDrawer();
}

function openCart() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.classList.add("open");
  document.body.classList.add("cart-open");
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.classList.remove("open");
  document.body.classList.remove("cart-open");
}

function renderCartButton() {
  const count = readCart().reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cart-count");
  if (el) el.textContent = count;
}

function renderCartDrawer() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  const detail = cartDetail();

  if (!detail.items.length) {
    container.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
  } else {
    container.innerHTML = detail.items.map(function (it) {
      return '' +
        '<div class="cart-item">' +
          '<img src="' + productImage(it.product, it.option) + '" alt="" onerror="this.src=\'' + placeholder() + '\'">' +
          '<div class="cart-item-info">' +
            '<p class="cart-item-name">' + it.product.name + '</p>' +
            '<p class="cart-item-option">' + it.option.label + '</p>' +
            '<p class="cart-item-price">' + formatPrice(it.option.price) + ' cada</p>' +
            '<div class="cart-item-actions">' +
              '<div class="qty-control">' +
                '<button type="button" onclick="changeQty(' + it.index + ',-1)">&minus;</button>' +
                '<span>' + it.qty + '</span>' +
                '<button type="button" onclick="changeQty(' + it.index + ',1)">+</button>' +
              '</div>' +
              '<button type="button" class="cart-remove" onclick="removeItem(' + it.index + ')">Remover</button>' +
            '</div>' +
          '</div>' +
        '</div>';
    }).join("");
  }

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.textContent = formatPrice(detail.total);
}

/* --------------------------- product rendering -------------------------- */

function productCard(product, inShop) {
  const img = productImage(product);
  const multiple = product.options.length > 1;
  let html = '' +
    '<div class="product-card" data-id="' + product.id + '">' +
      '<a class="product-card-link" href="produto.html?id=' + product.id + '">' +
        '<div class="product-img">' +
          '<img src="' + img + '" alt="' + product.name + '" loading="lazy" onerror="this.src=\'' + placeholder() + '\'">' +
          (multiple ? '<span class="product-badge">' + product.options.length + ' opções</span>' : '') +
        '</div>' +
        '<div class="product-info">' +
          '<span class="product-category">' + product.category + '</span>' +
          '<h3>' + product.name + '</h3>' +
          '<p class="price">' + priceLabel(product) + '</p>' +
        '</div>' +
      '</a>' +
      '<button type="button" class="quick-add" onclick="addToCart(' + product.id + ',\'' + product.options[0].code + '\',1)">Adicionar</button>' +
    '</div>';
  return html;
}

function renderProducts(products, targetId) {
  const grid = document.getElementById(targetId);
  if (!grid) return;
  if (!products.length) {
    grid.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
    return;
  }
  grid.innerHTML = products.map(p => productCard(p, true)).join("");
}

const FEATURED_IDS = [1, 11, 86, 135, 63, 42, 81, 118];

function renderFeatured() {
  const featured = FEATURED_IDS.map(getProduct).filter(Boolean);
  renderProducts(featured, "products-grid");
}

/* ------------------------------ filters --------------------------------- */

function setupFilters() {
  const search = document.getElementById("search");
  const category = document.getElementById("category-filter");
  if (search) search.addEventListener("input", applyFilters);
  if (category) category.addEventListener("change", applyFilters);
  applyFilters();
}

function applyFilters() {
  const term = (document.getElementById("search") && document.getElementById("search").value || "").toLowerCase();
  const cat = (document.getElementById("category-filter") && document.getElementById("category-filter").value) || "all";
  const filtered = CATALOG.filter(function (p) {
    const haystack = (p.name + " " + p.line + " " + p.category + " " + p.description + " " +
      p.options.map(o => o.label).join(" ")).toLowerCase();
    const matchesTerm = !term || haystack.indexOf(term) !== -1;
    const matchesCat = cat === "all" || p.category === cat;
    return matchesTerm && matchesCat;
  });
  renderProducts(filtered, "products-grid");
  const counter = document.getElementById("results-count");
  if (counter) counter.textContent = filtered.length + " produtos";
}

function setupCategorySelect() {
  const select = document.getElementById("category-filter");
  if (!select) return;
  const cats = [];
  CATALOG.forEach(p => { if (cats.indexOf(p.category) === -1) cats.push(p.category); });
  cats.sort();
  const current = select.value;
  select.innerHTML = '<option value="all">Todas as categorias</option>' +
    cats.map(c => '<option value="' + c + '">' + c + '</option>').join("");
  select.value = current || "all";
}

/* --------------------------- product page ------------------------------- */

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const product = getProduct(params.get("id"));
  const container = document.getElementById("product-detail");
  if (!container) return;

  if (!product) {
    container.innerHTML = '<div class="container"><p class="no-results">Produto não encontrado. <a href="loja.html">Voltar à loja</a></p></div>';
    return;
  }

  document.title = product.name + " | " + CONFIG.storeName;

  const select = document.getElementById("option-select");
  select.innerHTML = product.options.map(function (o, i) {
    return '<option value="' + o.code + '">' + o.label + ' — ' + formatPrice(o.price) + '</option>';
  }).join("");

  function refresh() {
    const option = getOption(product, select.value) || product.options[0];
    const img = productImage(product, option);
    const imageEl = document.getElementById("detail-image");
    imageEl.src = img;
    imageEl.onerror = function () { this.src = placeholder(); };
    document.getElementById("detail-category").textContent = product.category;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-brand").textContent = product.brand + " • " + product.line;
    document.getElementById("detail-price").textContent = formatPrice(option.price);
    document.getElementById("detail-code").textContent = "Código: " + option.code;
    document.getElementById("detail-description").textContent = product.description;
    const optWrap = document.getElementById("option-wrap");
    optWrap.style.display = product.options.length > 1 ? "" : "none";
  }

  select.addEventListener("change", refresh);
  refresh();

  document.getElementById("add-to-cart-btn").addEventListener("click", function () {
    addToCart(product.id, select.value, document.getElementById("quantity").value);
  });
  document.getElementById("buy-now-btn").addEventListener("click", function () {
    addToCart(product.id, select.value, document.getElementById("quantity").value);
    checkoutWhatsApp();
  });
}

/* ------------------------------- init ----------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  injectCartUI();

  if (document.getElementById("product-detail")) {
    renderProductPage();
    return;
  }
  if (document.getElementById("products-grid")) {
    if (document.getElementById("category-filter")) {
      setupCategorySelect();
      const cat = new URLSearchParams(window.location.search).get("cat");
      const select = document.getElementById("category-filter");
      if (cat && Array.prototype.some.call(select.options, o => o.value === cat)) {
        select.value = cat;
      }
      setupFilters();
    } else {
      renderFeatured();
    }
  }
});
