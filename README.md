# Essência da Rose | Loja Virtual

## Sobre o Site

Site inspirado em: https://ttayronne.wixsite.com/ncia
**Nome:** Essência da Rose
**Atendimento:** Rose
**Marcas:** NATURA • AVON • BOTICÁRIO
**Fontes:** Fraunces (serif) + Helvetica Neue (sans-serif)
**Paleta de cores Wix:**
- --wst-base-1-color: #FDFBF7 (cream)
- --wst-base-2-color: #2D2D2D (carvão)
- --wst-accent-1-color: #A67C52 (dourado âmbar)
- --wst-shade-1-color: #F7F2EB (bege)
- --wst-shade-2-color: #E8DED3
- --wst-accent-4-color: #F2D5D5 (rose)

## Estrutura do Projeto

```
larisa-ladingpage/
├── index.html              → Página inicial (Home)
├── loja.html               → Página da loja (todos os produtos)
├── produto.html            → Página individual do produto
├── css/
│   └── style.css           → Estilos com tema Wix (Fraunces + Helvetica)
├── js/
│   ├── products.js         → Catálogo completo (window.CATALOG)
│   ├── product-images.js   → Mapa código Natura → foto (gerado)
│   └── script.js           → Busca, filtros, carrinho e checkout via WhatsApp
├── data/
│   └── products.json       → Catálogo gerado a partir de js/products.js (referência)
├── imagens/
│   └── produtos/
│       ├── natura/         → Fotos oficiais dos produtos (baixadas do site da Natura)
│       ├── revista_pages/  → Recortes extraídos dos PDFs
│       └── placeholder.jpg → Imagem usada quando não há foto
├── produtos/               → Dados individuais por produto
├── pdf-original/           → PDFs originais da Natura
│   ├── catalogue Natura Botanico.pdf
│   └── revista natura 15.pdf
├── cssaqui/                → Código fonte Wix (referência)
└── README.md               → Este arquivo
```

## Páginas

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Home - hero, categorias, produtos em destaque, marcas |
| `loja.html` | Lista completa de todos os produtos com busca/filtro |
| `produto.html` | Página individual com descrição, preço, carrinho |

## Categorias

1. **Perfumaria** - Aura Alba, Una, Ilía, Luna, Ekos, Kaiak, Kriska, Essencial, Natura Homem, Humor, Águas, Body Splashes
2. **Corpo** - Tododia, Ekos, Solar, Erva Doce, Sève
3. **Cabelos** - Tododia, Lumina, Ekos
4. **Desodorantes** - Roll-on e Antitranspirantes
5. **Maquiagem** - Natura Faces
6. **Rosto & Tratamento** - Chronos Derma
7. **Infantil** - Mamãe e Bebê e Naturé
8. **Presentes** - Kits, presentes e Crer Para Ver
9. **Casa & Bem-estar** - Natura Botânico (alta perfumaria, aromaterapia, casa)

## Produtos (152 itens · 843 variações)

Catálogo completo extraído dos dois PDFs. Cada item agrupa suas variações
(fragrância, cor, tamanho) em um único card, com o seletor na página do produto.

- Fonte: **revista natura 15.pdf** (ciclo 15/2026) + **catalogue Natura Botânico.pdf**
- Preços: valores vigentes do ciclo 15/2026
- Cada variação guarda seu **código Natura** (usado no pedido pelo WhatsApp)

### Fotos dos produtos

- **Todas as 842 variações têm foto** (pasta `imagens/produtos/natura/`).
- **824** são fotos oficiais da Natura, baixadas direto pelo código do produto.
- **13** são de **kits equivalentes** na Natura (o kit do ciclo 15/26 não está publicado; a composição pode variar).
- **1** (Duo Bronze) veio de loja revendedora — não está publicada no site da Natura.
- O mapa `código Natura → arquivo` fica em `js/product-images.js` (gerado; não editar à mão).
- Durante o download, o título de cada produto na Natura foi usado para **conferir e corrigir** códigos
  que tinham sido transcritos errado do PDF (ex.: Luna Divina/Nuit, Una Blush/Artisan, bases da Faces,
  refis de difusor do Botânico).

### Carrinho e checkout (WhatsApp)

- O site é uma **landing page**: não processa pagamento.
- A pessoa pode adicionar itens ao carrinho (salvo em `localStorage`).
- Ao clicar em **Finalizar pelo WhatsApp**, abre o WhatsApp com a mensagem contendo
  os produtos, a variação escolhida, a quantidade de cada um, o valor unitário e o total.
- Configure o número em `js/script.js` → `CONFIG.whatsapp` (formato `55 + DDD + número`).

## Fontes e Cores (do CSS do Wix)

```css
/* Theme Variables do Wix */
--wst-base-1-color: #FDFBF7;  /* Background cream */
--wst-base-2-color: #2D2D2D;  /* Text dark */
--wst-shade-1-color: #F7F2EB; /* Secondary bg */
--wst-accent-1-color: #A67C52; /* Golden accent */
--wst-accent-4-color: #F2D5D5; /* Rose accent */

/* Fonts */
Headings: Fraunces (serif)
Body: Helvetica Neue, Helvetica, Arial, sans-serif
```

## URLs no Wix (referência)

- Home: `/ncia`
- Loja: `/ncia/category/all-products`
- Categoria: `/ncia/category/category/{categoria}`
- Produto: `/ncia/p-gina-de-produto/{slug}`

## Dados dos Produtos

Todos os dados foram extraídos dos dois PDFs em `pdf-original/`:
- **Revista Natura Ciclo 15/26** — Perfumaria, Corpo, Cabelos, Desodorantes, Maquiagem, Chronos, Infantil, Presentes, Crer Para Ver
- **Catálogo Natura Botânico** — Alta Perfumaria, Aromaterapia e Casa
- Cada item tem nome, linha, categoria, descrição, preço e variações com código Natura

## Como usar

1. Configure o número em `js/script.js` → `CONFIG.whatsapp`
2. Abra `index.html` no navegador (funciona direto por `file://`, sem servidor)
3. O catálogo fica em `js/products.js`; `data/products.json` é gerado a partir dele
4. Busca, filtros de categoria, carrinho e checkout funcionam automaticamente
