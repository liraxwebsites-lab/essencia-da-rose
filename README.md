# Essência da Rose

Landing page da loja **Essência da Rose** (Natura · Avon · O Boticário).
Catálogo com fotos, carrinho e pedido finalizado pelo WhatsApp.

## Como rodar

Abra o `index.html` no navegador. É estático: não precisa de servidor nem build.

## Estrutura

```
index.html               Home
loja.html                Loja (busca e filtro por categoria)
produto.html             Página do produto
css/style.css            Estilos
js/products.js           Catálogo (152 produtos / 842 variações)
js/product-images.js     Fotos por código Natura (gerado)
js/script.js             Render, carrinho e checkout no WhatsApp
imagens/produtos/        Fotos dos produtos
```

## Configuração

Tudo em `js/script.js`, no topo do arquivo:

- `CONFIG.whatsapp` — número do WhatsApp (formato `55 + DDD + número`)
- `CONFIG.storeName` e `CONFIG.sellerName` — nome da loja e de quem atende
- Catálogo: edite `js/products.js`. Cada produto tem `options` com as variações
  (fragrância, cor, tamanho), cada uma com preço e código Natura.

## Como funciona o pedido

A pessoa adiciona os itens no carrinho e clica em **Finalizar pelo WhatsApp**.
Abre o WhatsApp já com a mensagem: itens, variação escolhida, quantidade,
valor unitário e total. O site não processa pagamento.

## Deploy

Hospedado na Vercel como site estático (sem build). Cada push na `main` publica sozinho.

Os PDFs de origem e as imagens antigas ficam fora do repositório por tamanho
(`pdf-original/` e `imagens/produtos/revista_pages/`).
