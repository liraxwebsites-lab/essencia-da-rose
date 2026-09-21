/* =========================================================================
   Essência da Rose — Catálogo completo
   Fonte: "revista natura 15.pdf" (ciclo 15/2026) + "catalogue Natura Botânico.pdf"
   Estrutura: cada produto tem `options` (variações da MESMA linha/type).
   Para trocar o número do WhatsApp, edite CONFIG.whatsapp em js/script.js
   ========================================================================= */
window.CATALOG = [

  /* ======================= PERFUMARIA ======================= */

  {
    id: 1, name: "Natura Aura Alba Dourada Eau de Parfum 75 ml", brand: "Natura", line: "Aura Alba",
    category: "Perfumaria", description: "Lançamento. Floral amadeirado luminoso: a rara Rosa Alba de Konare com a doce Flor do Mel, o fascínio do âmbar e um fundo amadeirado.",
    image: "", options: [ { label: "75 ml", price: 279.90, code: "226559", image: "" } ]
  },
  {
    id: 2, name: "Natura Aura Alba Eau de Parfum 75 ml", brand: "Natura", line: "Aura Alba",
    category: "Perfumaria", description: "Combina o óleo natural da Rosa Alba de Konare com a flor do mel, a lichia, o sândalo e o patchouli. Deo parfum de longa duração.",
    image: "", options: [ { label: "75 ml", price: 329.90, code: "178907", image: "" } ]
  },
  {
    id: 3, name: "Natura Aura Alba Creme Aveludado Corporal", brand: "Natura", line: "Aura Alba",
    category: "Perfumaria", description: "Explosão de perfumação que dura o dia todo. Textura aveludada com hidratação por até 48 horas.",
    image: "", options: [
      { label: "200 g", price: 149.90, code: "180310", image: "" },
      { label: "Refil 200 g", price: 99.00, code: "189575", image: "" }
    ]
  },
  {
    id: 4, name: "Natura Aura Alba Óleo Perfumado Corporal 200 ml", brand: "Natura", line: "Aura Alba",
    category: "Perfumaria", description: "Uso com ou sem enxágue, para todos os tipos de pele. Hidratação por até 48 horas.",
    image: "", options: [ { label: "200 ml", price: 129.90, code: "197460", image: "" } ]
  },
  {
    id: 5, name: "Natura Aura Alba Creme Perfumado de Mãos 40 g", brand: "Natura", line: "Aura Alba",
    category: "Perfumaria", description: "Toque aveludado com rápida absorção.",
    image: "", options: [ { label: "40 g", price: 47.90, code: "184481", image: "" } ]
  },
  {
    id: 6, name: "Natura Aura Alba Sabonetes Perfumados em Barra", brand: "Natura", line: "Aura Alba",
    category: "Perfumaria", description: "Caixa com 2 unidades de 90 g cada.",
    image: "", options: [ { label: "Caixa 2 x 90 g", price: 49.90, code: "184829", image: "" } ]
  },
  {
    id: 7, name: "Natura Una Deo Parfum Feminino", brand: "Natura", line: "Una",
    category: "Perfumaria", description: "Adocicado intenso com acordes gourmands de praliné e ganache, buquê floral, poejo e paramela.",
    image: "", options: [
      { label: "Una 75 ml", price: 329.90, code: "2446", image: "" },
      { label: "Una Artisan 75 ml", price: 329.90, code: "2458", image: "" },
      { label: "Una Blush 75 ml", price: 329.90, code: "128756", image: "" }
    ]
  },
  {
    id: 8, name: "Natura Una Infinito Deo Parfum Feminino 75 ml", brand: "Natura", line: "Una",
    category: "Perfumaria", description: "Adocicado intenso: cremosidade da ameixa negra com notas amadeiradas e cítricas potencializadas por um acorde gourmand.",
    image: "", options: [ { label: "75 ml", price: 244.90, code: "43135", image: "" } ]
  },
  {
    id: 9, name: "Natura Una Desodorante Hidratante Corporal Perfumado 200 g", brand: "Natura", line: "Una",
    category: "Perfumaria", description: "Nova fórmula, mesma fragrância. Hidrata por até 48 horas.",
    image: "", options: [ { label: "Artisan 200 g", price: 134.90, code: "140595", image: "" } ]
  },
  {
    id: 10, name: "Natura Ilía Deo Parfum Feminino 50 ml", brand: "Natura", line: "Ilía",
    category: "Perfumaria", description: "Floral intenso em diferentes facetas — da rosa Upcycling ao buquê floral surpreendente.",
    image: "", options: [
      { label: "Ilía", price: 199.90, code: "54522", image: "" },
      { label: "Ilía Secreto", price: 199.90, code: "83314", image: "" },
      { label: "Ilía Ser", price: 199.90, code: "102419", image: "" },
      { label: "Ilía Jardim Secreto", price: 199.90, code: "173020", image: "" },
      { label: "Ilía Plena", price: 139.90, code: "112811", image: "" }
    ]
  },
  {
    id: 11, name: "Natura Luna Desodorante Colônia Feminino 75 ml", brand: "Natura", line: "Luna",
    category: "Perfumaria", description: "A família Luna: fragrâncias femininas marcantes, do chipre adocicado ao floral.",
    image: "", options: [
      { label: "Luna", price: 185.90, code: "44452", image: "" },
      { label: "Luna Divina", price: 185.90, code: "171364", image: "" },
      { label: "Luna Absoluta", price: 185.90, code: "56417", image: "" },
      { label: "Luna Nuit", price: 185.90, code: "204451", image: "" },
      { label: "Luna Ousadia", price: 185.90, code: "128615", image: "" },
      { label: "Luna Radiante", price: 185.90, code: "2550", image: "" },
      { label: "Luna Liberdade", price: 124.90, code: "169776", image: "" }
    ]
  },
  {
    id: 12, name: "Natura Luna Intensa Deo Parfum Feminino 50 ml", brand: "Natura", line: "Luna",
    category: "Perfumaria", description: "Chipre amadeirado intenso e sofisticado: patchouli potente com doçura da vanilla, flores únicas e cremosidade do pêssego.",
    image: "", options: [ { label: "50 ml", price: 219.90, code: "86935", image: "" } ]
  },
  {
    id: 13, name: "Natura Luna Desodorante Hidratante Corporal Perfumado 300 ml", brand: "Natura", line: "Luna",
    category: "Perfumaria", description: "Hidrata e perfuma o corpo todo com as fragrâncias Luna.",
    image: "", options: [
      { label: "Luna", price: 95.90, code: "97153", image: "" },
      { label: "Luna Absoluta", price: 95.90, code: "97171", image: "" },
      { label: "Luna Nuit", price: 95.90, code: "204459", image: "" },
      { label: "Luna Radiante", price: 95.90, code: "97169", image: "" }
    ]
  },
  {
    id: 14, name: "Natura Luna Intensa Desodorante Hidratante Corporal 200 g", brand: "Natura", line: "Luna",
    category: "Perfumaria", description: "Embalagem de vidro. Hidrata e intensifica a perfumação.",
    image: "", options: [ { label: "200 g", price: 134.90, code: "173009", image: "" } ]
  },
  {
    id: 15, name: "Natura Ekos Eau de Parfum 50 ml", brand: "Natura", line: "Ekos",
    category: "Perfumaria", description: "Alta perfumaria Ekos inspirada na biodiversidade amazônica.",
    image: "", options: [
      { label: "Alma — amadeirado especiado", price: 389.90, code: "148479", image: "" },
      { label: "Raiz — floral verde", price: 389.90, code: "148478", image: "" },
      { label: "Pedra — amadeirado aromático", price: 389.90, code: "148477", image: "" },
      { label: "Fava — três baunilhas", price: 389.90, code: "241317", image: "" }
    ]
  },
  {
    id: 16, name: "Natura Kaiak Desodorante Colônia Feminino 100 ml", brand: "Natura", line: "Kaiak",
    category: "Perfumaria", description: "O frescor de Kaiak em versões femininas, do cítrico floral ao floral aquoso frutal.",
    image: "", options: [
      { label: "Kaiak — cítrico floral", price: 189.90, code: "108407", image: "" },
      { label: "Kaiak Aventura — floral aquoso", price: 189.90, code: "108408", image: "" },
      { label: "Kaiak Oceano — floral frutal", price: 189.90, code: "108410", image: "" },
      { label: "Kaiak 21K — floral aquoso frutal", price: 134.90, code: "236375", image: "" }
    ]
  },
  {
    id: 17, name: "Natura Biografia Desodorante Colônia Feminino 100 ml", brand: "Natura", line: "Biografia",
    category: "Perfumaria", description: "Fragrância floral moderada, atemporal e versátil.",
    image: "", options: [ { label: "100 ml", price: 209.90, code: "71600", image: "" } ]
  },
  {
    id: 18, name: "Natura Kriska Desodorante Colônia Feminino 100 ml", brand: "Natura", line: "Kriska",
    category: "Perfumaria", description: "A doçura das notas de baunilha com o marcante das madeiras, realçando poder e suavidade.",
    image: "", options: [
      { label: "Kriska — adocicado moderado", price: 169.90, code: "41795", image: "" },
      { label: "Kriska Shock", price: 169.90, code: "68944", image: "" },
      { label: "Kriska Drama", price: 169.90, code: "68943", image: "" }
    ]
  },
  {
    id: 19, name: "Natura Essencial Deo Parfum Feminino", brand: "Natura", line: "Essencial",
    category: "Perfumaria", description: "A linha Essencial em versões florais intensas, adocicadas e amadeiradas.",
    image: "", options: [
      { label: "Essencial 100 ml", price: 279.90, code: "76421", image: "" },
      { label: "Essencial Exclusivo 100 ml", price: 279.90, code: "76423", image: "" },
      { label: "Essencial Supreme 100 ml", price: 279.90, code: "95563", image: "" },
      { label: "Essencial Sentir 100 ml", price: 279.90, code: "167756", image: "" },
      { label: "Essencial Atrai 100 ml", price: 279.90, code: "165813", image: "" },
      { label: "Essencial Único 90 ml", price: 322.90, code: "103349", image: "" }
    ]
  },
  {
    id: 20, name: "Natura Essencial Desodorante Hidratante Corporal Perfumado 200 g", brand: "Natura", line: "Essencial",
    category: "Perfumaria", description: "Embalagem de vidro. Prolonga e intensifica a perfumação.",
    image: "", options: [
      { label: "Essencial", price: 134.90, code: "16870", image: "" },
      { label: "Essencial Exclusivo", price: 134.90, code: "16871", image: "" },
      { label: "Essencial Oud", price: 134.90, code: "16872", image: "" }
    ]
  },
  {
    id: 21, name: "Natura Essencial Deo Parfum Masculino", brand: "Natura", line: "Essencial",
    category: "Perfumaria", description: "Fragrâncias masculinas amadeiradas e especiadas da linha Essencial.",
    image: "", options: [
      { label: "Essencial 100 ml", price: 279.90, code: "76420", image: "" },
      { label: "Essencial Exclusivo 100 ml", price: 167.90, code: "76422", image: "" },
      { label: "Essencial Supreme 100 ml", price: 279.90, code: "95560", image: "" },
      { label: "Essencial Sentir 100 ml", price: 279.90, code: "167755", image: "" },
      { label: "Essencial Atrai 100 ml", price: 167.90, code: "165811", image: "" },
      { label: "Essencial Único 90 ml", price: 322.90, code: "103348", image: "" }
    ]
  },
  {
    id: 22, name: "Natura Essencial Coleção Ingredientes Árabes Deo Parfum 100 ml", brand: "Natura", line: "Essencial",
    category: "Perfumaria", description: "Fragrâncias marcantes e intensas com ingredientes da perfumaria árabe — oud, mirra e safran.",
    image: "", options: [
      { label: "Oud Feminino — amadeirado floral", price: 289.90, code: "76425", image: "" },
      { label: "Oud Masculino — amadeirado ambarado", price: 289.90, code: "76424", image: "" },
      { label: "Mirra Feminino", price: 289.90, code: "27264", image: "" },
      { label: "Mirra Masculino", price: 289.90, code: "27263", image: "" },
      { label: "Safran Feminino", price: 289.90, code: "214410", image: "" },
      { label: "Safran Masculino", price: 289.90, code: "214411", image: "" },
      { label: "Oud Vanilla Feminino", price: 289.90, code: "17049", image: "" },
      { label: "Oud Vanilla Masculino", price: 289.90, code: "17052", image: "" },
      { label: "Oud Pimenta Feminino", price: 289.90, code: "18887", image: "" },
      { label: "Oud Pimenta Masculino", price: 289.90, code: "18888", image: "" }
    ]
  },
  {
    id: 23, name: "Natura Essencial Miniatura Deo Parfum 25 ml", brand: "Natura", line: "Essencial",
    category: "Perfumaria", description: "Sua fragrância em miniatura, perfeita para acompanhar você.",
    image: "", options: [
      { label: "Oud Feminino", price: 99.90, code: "255957", image: "" },
      { label: "Oud Vanilla Feminino", price: 99.90, code: "255955", image: "" },
      { label: "Oud Pimenta Feminino", price: 99.90, code: "255958", image: "" },
      { label: "Oud Masculino", price: 99.90, code: "255956", image: "" },
      { label: "Oud Vanilla Masculino", price: 99.90, code: "255953", image: "" },
      { label: "Oud Pimenta Masculino", price: 99.90, code: "255954", image: "" }
    ]
  },
  {
    id: 24, name: "Natura Homem Desodorante Colônia 100 ml", brand: "Natura", line: "Natura Homem",
    category: "Perfumaria", description: "Amadeirado aromático cítrico — a assinatura masculina Natura Homem.",
    image: "", options: [
      { label: "Natura Homem — amadeirado aromático cítrico", price: 214.90, code: "53255", image: "" }
    ]
  },
  {
    id: 25, name: "Natura Homem Deo Parfum 100 ml", brand: "Natura", line: "Natura Homem",
    category: "Perfumaria", description: "Deo parfum masculinos de alta performance.",
    image: "", options: [
      { label: "Tato — amadeirado especiado ambarado", price: 179.90, code: "99159", image: "" },
      { label: "Elo — amadeirado aromático", price: 179.90, code: "125366", image: "" },
      { label: "Verum — amadeirado aromático verde", price: 179.90, code: "112092", image: "" },
      { label: "Essence — amadeirado ambarado especiado", price: 244.90, code: "59847", image: "" },
      { label: "Sagaz — amadeirado adocicado especiado", price: 244.90, code: "81951", image: "" },
      { label: "Dom — adocicado amadeirado especiado", price: 244.90, code: "71770", image: "" },
      { label: "Evolut.io — amadeirado ambarado adocicado", price: 329.90, code: "176285", image: "" },
      { label: "Cor.agio — amadeirado ambarado especiado", price: 329.90, code: "89834", image: "" },
      { label: "Identidad — amadeirado frutal", price: 244.90, code: "201463", image: "" }
    ]
  },
  {
    id: 26, name: "Natura Homem Body Spray Corpo & Cabelo 200 ml", brand: "Natura", line: "Natura Homem",
    category: "Perfumaria", description: "Corpo e cabelo hidratados e perfumados ao longo do dia.",
    image: "", options: [ { label: "Identidad 200 ml", price: 99.90, code: "201466", image: "" } ]
  },
  {
    id: 27, name: "Natura Homem Cuidados Pessoais", brand: "Natura", line: "Natura Homem",
    category: "Perfumaria", description: "Fórmulas desenvolvidas especialmente para a pele masculina.",
    image: "", options: [
      { label: "Shampoo 2 em 1 300 ml", price: 52.90, code: "151018", image: "" },
      { label: "Balm pós-barba multifuncional 75 ml", price: 75.90, code: "151022", image: "" },
      { label: "Creme para barbear multifuncional 75 ml", price: 59.90, code: "151021", image: "" },
      { label: "Desodorante hidratante corporal 300 ml", price: 84.90, code: "151020", image: "" },
      { label: "Óleo para barba 30 ml", price: 81.90, code: "152331", image: "" },
      { label: "Sabonete barra 2 em 1 corpo e barba", price: 37.90, code: "151023", image: "" },
      { label: "Gel para barbear 75 g", price: 53.90, code: "152277", image: "" },
      { label: "Espuma de barbear 200 ml", price: 72.90, code: "159952", image: "" }
    ]
  },
  {
    id: 28, name: "Natura Kaiak Desodorante Colônia Masculino 100 ml", brand: "Natura", line: "Kaiak",
    category: "Perfumaria", description: "30 anos de frescor e movimento — as fragrâncias masculinas Kaiak.",
    image: "", options: [
      { label: "Kaiak — aromático aquoso", price: 189.90, code: "108400", image: "" },
      { label: "Kaiak Urbe — aromático especiado", price: 189.90, code: "108401", image: "" },
      { label: "Kaiak Pulso — aromático aquoso", price: 189.90, code: "108403", image: "" },
      { label: "Kaiak Oceano — aromático amadeirado", price: 189.90, code: "108405", image: "" },
      { label: "Kaiak Sonar — aromático ambarado", price: 189.90, code: "155607", image: "" },
      { label: "Kaiak Aventura — aromático cítrico amadeirado", price: 124.90, code: "108402", image: "" },
      { label: "Kaiak 21K — amadeirado com gengibre", price: 139.90, code: "228528", image: "" }
    ]
  },
  {
    id: 29, name: "Natura K Deo Parfum Masculino 100 ml", brand: "Natura", line: "K",
    category: "Perfumaria", description: "Notas amadeiradas combinadas com ervas e especiarias finas.",
    image: "", options: [
      { label: "K", price: 299.90, code: "57525", image: "" },
      { label: "K Max — pimenta-preta, poejo e madeira escura", price: 299.90, code: "72468", image: "" }
    ]
  },
  {
    id: 30, name: "Natura Sr. N Desodorante Colônia 100 ml", brand: "Natura", line: "Sr. N",
    category: "Perfumaria", description: "Cítrico moderado: toque de madeiras com o frescor do limão.",
    image: "", options: [ { label: "100 ml", price: 169.90, code: "30410", image: "" } ]
  },
  {
    id: 31, name: "Natura Biografia Desodorante Colônia Masculino 100 ml", brand: "Natura", line: "Biografia",
    category: "Perfumaria", description: "Amadeirado aromático: notas frescas e herbais em um corpo amadeirado.",
    image: "", options: [ { label: "100 ml", price: 209.90, code: "71601", image: "" } ]
  },
  {
    id: 32, name: "Natura Humor Mood Boosters Desodorante Colônia 25 ml", brand: "Natura", line: "Humor",
    category: "Perfumaria", description: "Testadas pela neurociência, perfumam e potencializam as emoções positivas.",
    image: "", options: [
      { label: "+ Confiança", price: 99.90, code: "203348", image: "" },
      { label: "+ Ânimo", price: 99.90, code: "203317", image: "" },
      { label: "+ Vibrações", price: 99.90, code: "203333", image: "" }
    ]
  },
  {
    id: 33, name: "Natura Humor Desodorante Colônia 75 ml", brand: "Natura", line: "Humor",
    category: "Perfumaria", description: "Fragrâncias alegres e cheias de personalidade.",
    image: "", options: [
      { label: "Humor Liberta — amadeirado frutal", price: 164.90, code: "102422", image: "" },
      { label: "Humor Envolve — floral envolvente", price: 164.90, code: "169821", image: "" },
      { label: "Humor A Dois — bergamota e pimenta", price: 164.90, code: "86725", image: "" },
      { label: "Humor Conexão — amadeirado frutal", price: 164.90, code: "131465", image: "" },
      { label: "Humor Me Beija — especiarias e cacau", price: 164.90, code: "95949", image: "" },
      { label: "Humor Primeiro — frutal moderado", price: 164.90, code: "86723", image: "" },
      { label: "Humor Festival — frutal", price: 164.90, code: "131462", image: "" },
      { label: "Humor Beija Eu — ameixa, sândalo e cacau", price: 164.90, code: "95947", image: "" },
      { label: "Humor Próprio — adocicado moderado", price: 164.90, code: "86727", image: "" },
      { label: "Humor E Paz — aromático moderado", price: 164.90, code: "86728", image: "" }
    ]
  },
  {
    id: 34, name: "Natura Ekos Frescor Desodorante Colônia 150 ml", brand: "Natura", line: "Ekos",
    category: "Perfumaria", description: "Fragrâncias leves e refrescantes da biodiversidade brasileira, com refil disponível.",
    image: "", options: [
      { label: "Cupuaçu 150 ml", price: 129.90, code: "199392", image: "" },
      { label: "Pitanga 150 ml", price: 129.90, code: "73563", image: "" },
      { label: "Açaí 150 ml", price: 129.90, code: "73565", image: "" },
      { label: "Castanha 150 ml", price: 129.90, code: "73562", image: "" },
      { label: "Baunilha Amazônica 150 ml", price: 129.90, code: "250231", image: "" },
      { label: "Maracujá 150 ml", price: 129.90, code: "73564", image: "" },
      { label: "Cacau 150 ml", price: 90.93, code: "218369", image: "" },
      { label: "Refil 150 ml", price: 105.90, code: "73567", image: "" }
    ]
  },
  {
    id: 35, name: "Natura Águas Desodorante Colônia 170 ml", brand: "Natura", line: "Águas",
    category: "Perfumaria", description: "Fragrâncias leves em embalagem de 170 ml com válvula spray.",
    image: "", options: [
      { label: "Lavanda", price: 119.90, code: "95644", image: "" },
      { label: "Jabuticaba", price: 119.90, code: "95643", image: "" },
      { label: "Flor de Laranjeira", price: 119.90, code: "95638", image: "" }
    ]
  },
  {
    id: 36, name: "Natura Tododia Body Splash Desodorante Colônia 200 ml", brand: "Natura", line: "Tododia",
    category: "Perfumaria", description: "Fragrâncias queridinhas do verão, com refil disponível.",
    image: "", options: [
      { label: "Cereja e Avelã", price: 96.90, code: "95841", image: "" },
      { label: "Algodão", price: 96.90, code: "72221", image: "" },
      { label: "Amora Vermelha e Jabuticaba", price: 96.90, code: "88075", image: "" },
      { label: "Energizante Flor de Gengibre e Tangerina", price: 96.90, code: "152286", image: "" },
      { label: "Jambo Rosa e Flor de Caju", price: 96.90, code: "196313", image: "" },
      { label: "Morango e Baunilha Dourada", price: 96.90, code: "205937", image: "" },
      { label: "Pistache em Creme", price: 96.90, code: "237763", image: "" },
      { label: "Caramelo Salgado", price: 96.90, code: "237761", image: "" },
      { label: "Macadâmia", price: 96.90, code: "72195", image: "" },
      { label: "Néctar de Mel", price: 96.90, code: "237757", image: "" },
      { label: "Chá de Camomila e Lavanda", price: 96.90, code: "159712", image: "" }
    ]
  },
  {
    id: 37, name: "Natura Tododia Verão Body Splash Desodorante Colônia 200 ml", brand: "Natura", line: "Tododia",
    category: "Perfumaria", description: "As queridinhas do verão: acerola e hibisco, manga rosa e água de coco, amora e flor de pêssego.",
    image: "", options: [
      { label: "Acerola e Hibisco", price: 76.90, code: "117800", image: "" },
      { label: "Manga Rosa e Água de Coco", price: 76.90, code: "91204", image: "" },
      { label: "Amora e Flor de Pêssego", price: 76.90, code: "181136", image: "" }
    ]
  },

  /* ======================= DESODORANTES ======================= */

  {
    id: 38, name: "Natura Desodorante Antitranspirante Roll-on 75 ml", brand: "Natura", line: "Desodorantes",
    category: "Desodorantes", description: "Tecnologia invisível que não mancha roupas e 72 horas de proteção contra os odores da transpiração.",
    image: "", options: [
      { label: "Kaiak Feminino", price: 29.90, code: "189391", image: "" },
      { label: "Kaiak Aventura Feminino", price: 29.90, code: "189393", image: "" },
      { label: "Kaiak Masculino", price: 29.90, code: "189390", image: "" },
      { label: "Kaiak Aventura Masculino", price: 29.90, code: "189392", image: "" },
      { label: "Kaiak Urbe Masculino", price: 29.90, code: "189398", image: "" },
      { label: "Kaiak 21K Feminino", price: 19.90, code: "248320", image: "" },
      { label: "Kaiak 21K Masculino", price: 19.90, code: "247693", image: "" },
      { label: "Natura Homem", price: 29.90, code: "150225", image: "" },
      { label: "Natura Homem Dom", price: 29.90, code: "150227", image: "" },
      { label: "Natura Homem Essence", price: 29.90, code: "150229", image: "" }
    ]
  },
  {
    id: 39, name: "Natura Tododia Desodorante Antitranspirante Roll-on 70 ml", brand: "Natura", line: "Tododia",
    category: "Desodorantes", description: "Embalagens maiores que os antitranspirantes roll-on do mercado, com 72 horas de proteção.",
    image: "", options: [
      { label: "Macadâmia", price: 24.90, code: "189402", image: "" },
      { label: "Cereja e Avelã", price: 24.90, code: "189406", image: "" },
      { label: "Alecrim e Sálvia", price: 24.90, code: "189414", image: "" },
      { label: "Amora Vermelha e Jabuticaba", price: 24.90, code: "189404", image: "" },
      { label: "Erva Doce", price: 24.90, code: "189412", image: "" },
      { label: "Algodão", price: 24.90, code: "189401", image: "" },
      { label: "Pele Uniforme", price: 24.90, code: "190850", image: "" },
      { label: "Amora e Flor de Pêssego", price: 24.90, code: "181134", image: "" },
      { label: "Manga Rosa e Água de Coco", price: 24.90, code: "189409", image: "" },
      { label: "Sem Perfume", price: 24.90, code: "189413", image: "" }
    ]
  },
  {
    id: 40, name: "Natura Desodorante Antitranspirante em Creme 50 g", brand: "Natura", line: "Desodorantes",
    category: "Desodorantes", description: "Proteção antitranspirante com textura em creme.",
    image: "", options: [
      { label: "Tododia Leite de Algodão", price: 23.90, code: "199379", image: "" },
      { label: "Erva Doce", price: 23.90, code: "199377", image: "" },
      { label: "Tododia Pele Uniforme", price: 23.90, code: "199376", image: "" },
      { label: "Tododia Sem Perfume", price: 23.90, code: "199385", image: "" },
      { label: "Tododia Macadâmia", price: 23.90, code: "199382", image: "" },
      { label: "Tododia Noz Pecã e Cacau", price: 23.90, code: "199387", image: "" },
      { label: "Natura Homem", price: 23.90, code: "199389", image: "" }
    ]
  },
  {
    id: 41, name: "Natura Desodorante Corporal 100 ml", brand: "Natura", line: "Desodorantes",
    category: "Desodorantes", description: "Perfumam o corpo todo, com refil disponível.",
    image: "", options: [
      { label: "Natura Homem", price: 56.90, code: "110686", image: "" },
      { label: "Humor Primeiro", price: 56.90, code: "56744", image: "" },
      { label: "Kaiak Masculino", price: 56.90, code: "56747", image: "" },
      { label: "Sr. N", price: 56.90, code: "85393", image: "" },
      { label: "Biografia Masculino", price: 56.90, code: "88454", image: "" },
      { label: "Kaiak Feminino", price: 56.90, code: "56754", image: "" },
      { label: "Biografia Feminino", price: 56.90, code: "88453", image: "" },
      { label: "Kaiak Oceano Masculino", price: 56.90, code: "16623", image: "" },
      { label: "Luna Feminino", price: 56.90, code: "69200", image: "" },
      { label: "Humor Liberta", price: 56.90, code: "124226", image: "" },
      { label: "Humor Envolve", price: 56.90, code: "172092", image: "" },
      { label: "Festival de Humor", price: 56.90, code: "178859", image: "" },
      { label: "Conexão de Humor", price: 56.90, code: "178861", image: "" },
      { label: "Humor Próprio", price: 56.90, code: "56757", image: "" },
      { label: "Natura Homem Sagaz", price: 72.90, code: "158982", image: "" },
      { label: "Natura Homem Tato", price: 72.90, code: "183266", image: "" },
      { label: "Essencial Ato Feminino", price: 72.90, code: "179428", image: "" },
      { label: "Refil 100 ml", price: 44.90, code: "110687", image: "" }
    ]
  },

  /* ======================= CORPO — TODODIA ======================= */

  {
    id: 42, name: "Natura Tododia Creme Desodorante Nutritivo para o Corpo 400 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Pele hidratada e perfumada com as fragrâncias Tododia. Refil disponível.",
    image: "", options: [
      { label: "Algodão 400 ml", price: 78.90, code: "2816", image: "" },
      { label: "Macadâmia 400 ml", price: 78.90, code: "2814", image: "" },
      { label: "Amora Vermelha e Jabuticaba 400 ml", price: 78.90, code: "88103", image: "" },
      { label: "Noz Pecã e Cacau 400 ml", price: 78.90, code: "2820", image: "" },
      { label: "Cereja e Avelã 400 ml", price: 78.90, code: "99137", image: "" },
      { label: "Morango e Baunilha Dourada 400 ml", price: 78.90, code: "205936", image: "" },
      { label: "Jambo Rosa e Flor de Caju 400 ml", price: 78.90, code: "172097", image: "" },
      { label: "Energizante Flor de Gengibre e Tangerina 400 ml", price: 78.90, code: "152300", image: "" },
      { label: "Chá de Camomila e Lavanda 400 ml", price: 78.90, code: "121970", image: "" },
      { label: "Refil 400 ml (diversas fragrâncias)", price: 58.90, code: "2817", image: "" }
    ]
  },
  {
    id: 43, name: "Natura Tododia Creme Desodorante Nutritivo para o Corpo 200 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Versão de 200 ml do creme desodorante nutritivo Tododia.",
    image: "", options: [
      { label: "Algodão", price: 56.90, code: "23037", image: "" },
      { label: "Macadâmia", price: 56.90, code: "23081", image: "" },
      { label: "Cereja e Avelã", price: 56.90, code: "23218", image: "" },
      { label: "Chá de Camomila e Lavanda", price: 56.90, code: "121967", image: "" }
    ]
  },
  {
    id: 44, name: "Natura Tododia Creme Sorbet Desodorante Nutritivo para o Corpo 400 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Cuidados diários de verão: hidratam e refrescam após um dia de sol.",
    image: "", options: [
      { label: "Acerola e Hibisco", price: 62.90, code: "117796", image: "" },
      { label: "Amora e Flor de Pêssego", price: 62.90, code: "181132", image: "" },
      { label: "Manga Rosa e Água de Coco", price: 62.90, code: "103433", image: "" }
    ]
  },
  {
    id: 45, name: "Natura Tododia Sabonete Líquido em Gel 290 g / 300 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Limpeza cremosa que não resseca a pele, com as fragrâncias Tododia.",
    image: "", options: [
      { label: "Manga Rosa e Água de Coco", price: 50.90, code: "91192", image: "" },
      { label: "Cereja e Avelã", price: 50.90, code: "95843", image: "" },
      { label: "Amora Vermelha e Jabuticaba", price: 50.90, code: "5870", image: "" },
      { label: "Alecrim e Sálvia", price: 50.90, code: "86013", image: "" },
      { label: "Macadâmia (cremoso 300 ml)", price: 50.90, code: "113404", image: "" },
      { label: "Algodão (cremoso 300 ml)", price: 50.90, code: "113403", image: "" },
      { label: "Banho nas Nuvens (cremoso 300 ml)", price: 50.90, code: "159711", image: "" },
      { label: "Alecrim e Sálvia (mãos e corpo 390 g)", price: 59.90, code: "110281", image: "" },
      { label: "Sabonete Líquido Íntimo Cereja e Avelã 200 ml", price: 50.90, code: "174493", image: "" },
      { label: "Sabonete Líquido Íntimo Suave Conforto 200 ml", price: 50.90, code: "83641", image: "" }
    ]
  },
  {
    id: 46, name: "Natura Tododia Sabonete em Barra Puro Vegetal 5 x 90 g", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Caixa com 5 unidades de 90 g cada.",
    image: "", options: [
      { label: "Algodão", price: 31.40, code: "2830", image: "" },
      { label: "Noz Pecã e Cacau", price: 31.40, code: "2832", image: "" },
      { label: "Cereja e Avelã", price: 31.40, code: "95840", image: "" },
      { label: "Chá de Camomila e Lavanda", price: 31.40, code: "121969", image: "" },
      { label: "Alecrim e Sálvia", price: 31.40, code: "72147", image: "" },
      { label: "Jambo Rosa e Flor de Caju", price: 31.40, code: "214468", image: "" },
      { label: "Macadâmia", price: 31.40, code: "2829", image: "" },
      { label: "Amora Vermelha e Jabuticaba", price: 31.40, code: "87512", image: "" },
      { label: "Morango e Baunilha Dourada", price: 31.40, code: "205939", image: "" }
    ]
  },
  {
    id: 47, name: "Natura Tododia Balm Labial 2,7 g", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Lábios hidratados com as fragrâncias Tododia.",
    image: "", options: [
      { label: "Acerola e Hibisco", price: 35.90, code: "180470", image: "" },
      { label: "Manga Rosa e Água de Coco", price: 35.90, code: "180471", image: "" }
    ]
  },
  {
    id: 48, name: "Natura Tododia Bronzer Iluminador Corporal 150 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Bronzer iluminador corporal Acerola e Hibisco.",
    image: "", options: [
      { label: "Acobreado Intenso", price: 54.90, code: "180473", image: "" },
      { label: "Dourado Suave", price: 54.90, code: "180469", image: "" }
    ]
  },
  {
    id: 49, name: "Natura Tododia Gelato Desodorante Hidratante Corporal 250 g", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Manga Rosa e Água de Coco — textura gelato refrescante.",
    image: "", options: [ { label: "Manga Rosa e Água de Coco", price: 84.90, code: "180477", image: "" } ]
  },
  {
    id: 50, name: "Natura Tododia Água Prebiótica para o Corpo 150 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Manga Rosa e Água de Coco.",
    image: "", options: [ { label: "Manga Rosa e Água de Coco", price: 52.90, code: "103593", image: "" } ]
  },
  {
    id: 51, name: "Natura Tododia Creme Nuvem Relaxante para o Corpo 200 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Nutrição prebiótica + B5, Chá de Camomila e Lavanda.",
    image: "", options: [ { label: "Chá de Camomila e Lavanda", price: 84.90, code: "121958", image: "" } ]
  },
  {
    id: 52, name: "Natura Tododia Concentrado Relaxante 800 mg", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Concentrado relaxante Chá de Camomila e Lavanda.",
    image: "", options: [ { label: "Chá de Camomila e Lavanda", price: 69.90, code: "121968", image: "" } ]
  },
  {
    id: 53, name: "Natura Tododia Spray de Ambientes 200 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Perfuma o ambiente com a fragrância Chá de Camomila e Lavanda.",
    image: "", options: [ { label: "Chá de Camomila e Lavanda", price: 89.90, code: "121966", image: "" } ]
  },
  {
    id: 54, name: "Natura Tododia Sabonete em Barra Massageador", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Caixa com 2 unidades de 80 g cada, Chá de Camomila e Lavanda.",
    image: "", options: [ { label: "Chá de Camomila e Lavanda", price: 20.90, code: "121965", image: "" } ]
  },
  {
    id: 55, name: "Natura Tododia Creme Nutritivo para as Mãos 50 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Creme nutritivo para as mãos com as fragrâncias Tododia.",
    image: "", options: [
      { label: "Algodão", price: 31.90, code: "72178", image: "" },
      { label: "Flor de Pêssego e Jasmim", price: 31.90, code: "221573", image: "" },
      { label: "Noz Pecã e Cacau", price: 31.90, code: "72179", image: "" },
      { label: "Cereja e Avelã", price: 31.90, code: "95937", image: "" }
    ]
  },
  {
    id: 56, name: "Natura Tododia Morango e Baunilha Dourada", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Hidratação duradoura com fragrância adocicada floral.",
    image: "", options: [
      { label: "Creme Merengue para o Corpo 250 g", price: 84.90, code: "205941", image: "" },
      { label: "Creme Desodorante Nutritivo 400 ml", price: 78.90, code: "205936", image: "" },
      { label: "Refil Creme 400 ml", price: 58.90, code: "206230", image: "" },
      { label: "Óleo Bifásico Corporal 120 ml", price: 63.90, code: "206231", image: "" },
      { label: "Esfoliante para o Corpo 190 g", price: 50.90, code: "219299", image: "" }
    ]
  },
  {
    id: 57, name: "Natura Tododia Jambo Rosa e Flor de Caju", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Pele radiante e uniforme com uma fragrância vibrante.",
    image: "", options: [
      { label: "Esfoliante Nutritivo 190 g", price: 50.90, code: "172099", image: "" },
      { label: "Sabonete em Óleo Corporal 190 ml", price: 69.90, code: "172096", image: "" },
      { label: "Óleo em Creme Ultranutritivo 200 ml", price: 84.90, code: "172407", image: "" },
      { label: "Manteiga Uniformizadora de Tom 200 g", price: 84.90, code: "172411", image: "" },
      { label: "Creme Desodorante Nutrição Radiante 400 ml", price: 78.90, code: "172097", image: "" },
      { label: "Refil Creme 400 ml", price: 58.90, code: "172100", image: "" },
      { label: "Geleia Desodorante Iluminadora 100 g", price: 59.90, code: "172410", image: "" }
    ]
  },
  {
    id: 58, name: "Natura Tododia Energia Flor de Gengibre e Tangerina", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Pele mais fresca e macia com fragrância energizante.",
    image: "", options: [
      { label: "Gel de Banho Energizante 290 g/300 ml", price: 50.90, code: "152297", image: "" },
      { label: "Creme Desodorante 2 em 1 400 ml", price: 78.90, code: "152300", image: "" },
      { label: "Refil 400 ml", price: 58.90, code: "152290", image: "" },
      { label: "Sabonete em Barra Esfoliante", price: 20.90, code: "152301", image: "" },
      { label: "Bruma Facial Energizante 100 ml", price: 52.90, code: "152289", image: "" }
    ]
  },
  {
    id: 59, name: "Natura Tododia Cereja e Avelã", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Fragrância marcante que perfuma e hidrata as camadas mais profundas.",
    image: "", options: [
      { label: "Óleo Bifásico Corporal 120 ml", price: 63.90, code: "21307", image: "" },
      { label: "Creme Desodorante Nutritivo 400 ml", price: 78.90, code: "99137", image: "" },
      { label: "Creme Desodorante Nutritivo 200 ml", price: 56.90, code: "23218", image: "" },
      { label: "Refil Creme 400 ml", price: 58.90, code: "100605", image: "" }
    ]
  },
  {
    id: 60, name: "Natura Tododia Esfoliante em Creme para o Corpo 200 ml", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "Esfoliação com a fragrância Macadâmia.",
    image: "", options: [ { label: "Macadâmia", price: 50.90, code: "140759", image: "" } ]
  },
  {
    id: 61, name: "Natura Tododia Kit Sabonetes Manga Rosa e Água de Coco", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "1 Sabonete líquido em gel 290 g + 1 caixa de sabonetes em barra (5 x 90 g).",
    image: "", options: [ { label: "Kit", price: 63.90, code: "268173", image: "" } ]
  },
  {
    id: 62, name: "Natura Tododia Kit Algodão com Body Splash", brand: "Natura", line: "Tododia",
    category: "Corpo", description: "1 Body splash 200 ml + 1 Creme desodorante nutritivo 400 ml.",
    image: "", options: [ { label: "Kit", price: 98.80, code: "126271", image: "" } ]
  },

  /* ======================= CORPO — EKOS / SOLAR / ERVA DOCE / SÈVE ======================= */

  {
    id: 63, name: "Natura Ekos Creme Desodorante Hidratante para o Corpo 400 ml", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Ativos da biodiversidade brasileira para hidratação intensa. Refil disponível.",
    image: "", options: [
      { label: "Castanha — ultra-hidratante", price: 89.90, code: "203401", image: "" },
      { label: "Andiroba (Polpa desodorante hidratante 400 ml)", price: 89.90, code: "163709", image: "" },
      { label: "Tukumã — firmeza & sinais", price: 89.90, code: "203390", image: "" },
      { label: "Açaí — tom & brilho", price: 89.90, code: "203398", image: "" },
      { label: "Maracujá — dermocalmante", price: 89.90, code: "203383", image: "" },
      { label: "Cupuaçu — firmeza & sinais", price: 89.90, code: "203478", image: "" },
      { label: "Baunilha Amazônica — ultra-hidratante", price: 89.90, code: "216416", image: "" },
      { label: "Pitanga — tom & brilho", price: 89.90, code: "213690", image: "" },
      { label: "Refil 400 ml (Castanha)", price: 69.90, code: "203381", image: "" },
      { label: "Refil 400 ml (Andiroba)", price: 69.90, code: "162093", image: "" },
      { label: "Refil 400 ml (Tukumã)", price: 69.90, code: "203397", image: "" },
      { label: "Refil 400 ml (Cupuaçu)", price: 69.90, code: "205946", image: "" },
      { label: "Refil 400 ml (Baunilha Amazônica)", price: 69.90, code: "216414", image: "" }
    ]
  },
  {
    id: 64, name: "Natura Ekos Creme Desodorante Hidratante para o Corpo 200 ml", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Seus ativos favoritos de Ekos em versão de 200 ml com preço especial.",
    image: "", options: [
      { label: "Tukumã", price: 48.90, code: "203399", image: "" },
      { label: "Maracujá", price: 48.90, code: "203382", image: "" },
      { label: "Castanha", price: 48.90, code: "203379", image: "" },
      { label: "Andiroba (Polpa desodorante hidratante 200 ml)", price: 69.90, code: "166359", image: "" }
    ]
  },
  {
    id: 65, name: "Natura Ekos Óleo Trifásico Desodorante Corporal 200 ml", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Pele hidratada e iluminada, com refil disponível.",
    image: "", options: [
      { label: "Andiroba", price: 99.90, code: "97427", image: "" },
      { label: "Açaí", price: 99.90, code: "110650", image: "" },
      { label: "Maracujá", price: 99.90, code: "97428", image: "" },
      { label: "Castanha", price: 99.90, code: "174338", image: "" },
      { label: "Pitanga", price: 99.90, code: "226557", image: "" },
      { label: "Refil Andiroba 200 ml", price: 79.90, code: "97433", image: "" },
      { label: "Refil Maracujá 200 ml", price: 79.90, code: "97431", image: "" },
      { label: "Refil Pitanga 200 ml", price: 79.90, code: "242813", image: "" }
    ]
  },
  {
    id: 66, name: "Natura Ekos Óleo Bifásico / Monofásico Desodorante Corporal 200 ml", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Óleos corporais Ekos para hidratação e perfumação.",
    image: "", options: [
      { label: "Açaí — óleo bifásico", price: 99.90, code: "75493", image: "" },
      { label: "Baunilha Amazônica — óleo monofásico", price: 99.90, code: "230122", image: "" }
    ]
  },
  {
    id: 67, name: "Natura Ekos Bálsamo / Fluido / Esfoliante Corporal", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Texturas de tratamento Ekos para o corpo.",
    image: "", options: [
      { label: "Bálsamo Concentrado Tukumã 200 g", price: 97.90, code: "123735", image: "" },
      { label: "Esfoliante Térmico Relaxante Andiroba 100 g", price: 89.90, code: "162090", image: "" },
      { label: "Fluido de Massagem Andiroba 100 g", price: 76.90, code: "73214", image: "" },
      { label: "Fluido de Massagem Maracujá 100 g", price: 76.90, code: "95035", image: "" },
      { label: "Polpa Esfoliante Castanha 200 g", price: 95.90, code: "69825", image: "" },
      { label: "Esfoliante em Pó Açaí 100 g", price: 95.90, code: "140682", image: "" },
      { label: "Sérum Uniformizador Pitanga 200 g", price: 97.90, code: "216697", image: "" }
    ]
  },
  {
    id: 68, name: "Natura Ekos Sabonete Líquido para o Corpo 195 ml", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Limpam suavemente, perfumam e mantêm a hidratação natural da pele.",
    image: "", options: [
      { label: "Andiroba 195 ml", price: 55.90, code: "70406", image: "" },
      { label: "Maracujá 195 ml", price: 55.90, code: "70410", image: "" },
      { label: "Pitanga 195 ml", price: 55.90, code: "70407", image: "" },
      { label: "Esfoliante Tukumã 185 ml", price: 55.90, code: "98767", image: "" },
      { label: "Esfoliante Açaí 185 ml", price: 55.90, code: "97261", image: "" },
      { label: "Esfoliante Pitanga 185 ml", price: 55.90, code: "70409", image: "" },
      { label: "Refil Esfoliante Pitanga 185 ml", price: 40.60, code: "70397", image: "" },
      { label: "Refil Pitanga 195 ml", price: 40.60, code: "70394", image: "" }
    ]
  },
  {
    id: 69, name: "Natura Ekos Sabonete Líquido para as Mãos 250 ml", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Limpeza suave para as mãos, com refil disponível.",
    image: "", options: [
      { label: "Maracujá", price: 69.90, code: "70401", image: "" },
      { label: "Castanha", price: 69.90, code: "70402", image: "" },
      { label: "Pitanga", price: 69.90, code: "70403", image: "" },
      { label: "Refil Pitanga 250 ml", price: 51.90, code: "70390", image: "" }
    ]
  },
  {
    id: 70, name: "Natura Ekos Creme Hidratante para as Mãos 75 g", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Hidratação para as mãos com ativos Ekos.",
    image: "", options: [
      { label: "Andiroba", price: 59.90, code: "122484", image: "" },
      { label: "Açaí", price: 59.90, code: "19904", image: "" },
      { label: "Maracujá", price: 59.90, code: "97269", image: "" },
      { label: "Castanha", price: 59.90, code: "70983", image: "" },
      { label: "Baunilha Amazônica", price: 59.90, code: "216412", image: "" },
      { label: "Cupuaçu", price: 59.90, code: "203476", image: "" },
      { label: "Pitanga", price: 59.90, code: "212716", image: "" }
    ]
  },
  {
    id: 71, name: "Natura Ekos Creme Hidratante para os Pés 75 g", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Hidratação intensiva para os pés.",
    image: "", options: [ { label: "Castanha", price: 59.90, code: "69817", image: "" } ]
  },
  {
    id: 72, name: "Natura Ekos Creme Firmador e Esfoliante para o Bumbum", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Firmeza e tonificação da pele.",
    image: "", options: [
      { label: "Creme Esfoliante 190 g", price: 84.90, code: "204786", image: "" },
      { label: "Creme Firmador 200 g", price: 105.90, code: "203480", image: "" }
    ]
  },
  {
    id: 73, name: "Natura Ekos Sabonete em Barra Puro Vegetal Cremoso / Esfoliante", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Caixas com 4 unidades de 100 g cada. Veganos e que mantêm a hidratação natural da pele.",
    image: "", options: [
      { label: "Pitanga (cremoso e esfoliante)", price: 45.90, code: "212717", image: "" },
      { label: "Castanha, Andiroba, Ucuuba e Maracujá", price: 45.90, code: "134575", image: "" },
      { label: "Cupuaçu (cremoso)", price: 45.90, code: "206217", image: "" },
      { label: "Castanha, Maracujá, Açaí e Andiroba", price: 45.90, code: "134574", image: "" },
      { label: "Esfoliante Açaí, Andiroba, Maracujá e Castanha", price: 45.90, code: "129797", image: "" },
      { label: "Refrescante Castanha, Maracujá, Buriti e Pitanga", price: 45.90, code: "129799", image: "" },
      { label: "Esfoliante Maracujá", price: 45.90, code: "124393", image: "" },
      { label: "Cremoso Buriti", price: 45.90, code: "124397", image: "" },
      { label: "Cupuaçu (formato cupuaçu)", price: 79.90, code: "199393", image: "" },
      { label: "Baunilha Amazônica (cremoso 4 x 100 g)", price: 45.90, code: "235241", image: "" }
    ]
  },
  {
    id: 74, name: "Natura Ekos Kits Corpo", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Kits Ekos com economia.",
    image: "", options: [
      { label: "Kit Hidratação Andiroba (2 polpas 400 ml)", price: 105.80, code: "261371", image: "" },
      { label: "Kit Óleo Trifásico + Sabonete Andiroba", price: 89.90, code: "275502", image: "" },
      { label: "Kit Sabonetes Líquidos Maracujá", price: 77.90, code: "241047", image: "" },
      { label: "Kit Concentrado Castanha (250 ml + 30 ml)", price: 78.90, code: "150219", image: "" },
      { label: "Kit Ekos Sabonetes em Barra (3 caixas)", price: 116.90, code: "275448", image: "" }
    ]
  },
  {
    id: 75, name: "Natura Ekos Concentrado para o Corpo 30 ml", brand: "Natura", line: "Ekos",
    category: "Corpo", description: "Concentrado de tratamento Castanha.",
    image: "", options: [
      { label: "Concentrado 30 ml", price: 60.50, code: "139243", image: "" },
      { label: "Creme Hidratante Castanha 40 g", price: 41.90, code: "95133", image: "" }
    ]
  },

  {
    id: 76, name: "Natura Solar Protetor Solar Corporal", brand: "Natura", line: "Solar",
    category: "Corpo", description: "Linha de protetores solares que protege, previne e cuida da pele.",
    image: "", options: [
      { label: "Corporal 200 ml FPS 70", price: 155.90, code: "176908", image: "" },
      { label: "Bifásico 200 ml FPS 30", price: 149.90, code: "177404", image: "" },
      { label: "Corporal 200 ml FPS 50", price: 145.90, code: "176914", image: "" },
      { label: "Corporal 120 ml FPS 50", price: 74.90, code: "178864", image: "" },
      { label: "Gel Hidratante Pós-Sol 120 g", price: 69.90, code: "178865", image: "" },
      { label: "Infantil 200 ml FPS 50", price: 123.90, code: "176907", image: "" }
    ]
  },
  {
    id: 77, name: "Natura Solar Protetor Solar Facial", brand: "Natura", line: "Solar",
    category: "Corpo", description: "Proteção facial com textura leve e acabamento invisível.",
    image: "", options: [
      { label: "Pele Mista a Oleosa 50 ml FPS 70", price: 112.90, code: "186435", image: "" },
      { label: "Pele Normal a Seca 50 ml FPS 70", price: 112.90, code: "176905", image: "" },
      { label: "Facial Stick 15 g FPS 50", price: 129.90, code: "178858", image: "" },
      { label: "Pele Normal a Seca 50 ml FPS 50", price: 102.90, code: "176913", image: "" },
      { label: "Pele Mista a Oleosa 50 ml FPS 50", price: 102.90, code: "176909", image: "" }
    ]
  },
  {
    id: 78, name: "Natura Solar Duo Bronze Sérum Ativador de Bronzeado 170 ml", brand: "Natura", line: "Solar",
    category: "Corpo", description: "Bronze natural sem exposição ao sol. Estimula a produção de melanina com efeito tonalizante prolongado.",
    image: "", options: [ { label: "170 ml", price: 99.90, code: "229386", image: "" } ]
  },

  {
    id: 79, name: "Natura Erva Doce", brand: "Natura", line: "Erva Doce",
    category: "Corpo", description: "Limpa sem prejudicar as defesas naturais da pele.",
    image: "", options: [
      { label: "Sabonete em Barra Puro Vegetal Sortido 4 x 90 g", price: 40.90, code: "34089", image: "" },
      { label: "Sabonete Cremoso para as Mãos 250 ml", price: 63.90, code: "26441", image: "" },
      { label: "Refil Sabonete Cremoso 250 ml", price: 47.90, code: "28175", image: "" },
      { label: "Sabonete em Barra Puro Vegetal 3 x 90 g", price: 31.90, code: "26384", image: "" },
      { label: "Kit Desodorante em Creme + Sabonete em Barra", price: 41.40, code: "275447", image: "" }
    ]
  },
  {
    id: 80, name: "Natura Sève", brand: "Natura", line: "Sève",
    category: "Corpo", description: "Toda beleza à flor da pele — óleos e cremes desodorantes corporais perfumados.",
    image: "", options: [
      { label: "Óleo Desodorante Corporal Pimenta Rosa 200 ml", price: 119.90, code: "20214", image: "" },
      { label: "Refil Óleo Pimenta Rosa 200 ml", price: 99.90, code: "25543", image: "" },
      { label: "Óleo Desodorante Amêndoas Doces 200 ml", price: 119.90, code: "38854", image: "" },
      { label: "Creme Desodorante Perfumado Amêndoas Doces 200 g", price: 112.90, code: "189568", image: "" },
      { label: "Óleo Desodorante Amêndoas e Orquídea Negra 200 ml", price: 83.90, code: "140683", image: "" },
      { label: "Refil Amêndoas e Orquídea Negra 200 ml", price: 99.90, code: "199914", image: "" },
      { label: "Creme Desodorante Amêndoas e Orquídea Negra 200 g", price: 112.90, code: "189566", image: "" },
      { label: "Kit Sève Amêndoas e Orquídea Negra", price: 162.90, code: "275444", image: "" }
    ]
  },

  /* ======================= CABELOS — TODODIA ======================= */

  {
    id: 81, name: "Natura Tododia Shampoo 300 ml", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Shampoos que limpam e tratam de acordo com a necessidade dos fios. Refil disponível em várias linhas.",
    image: "", options: [
      { label: "Manga Rosa e Água de Coco — nutre", price: 31.90, code: "190389", image: "" },
      { label: "Maçã Verde e Aloe Vera — hidrata", price: 35.90, code: "154866", image: "" },
      { label: "Pêssego e Amêndoa — nutre", price: 35.90, code: "154869", image: "" },
      { label: "Framboesa e Jojoba — liso + liso", price: 35.90, code: "221581", image: "" },
      { label: "Amora e Óleo de Coco — cachos e crespos", price: 35.90, code: "173588", image: "" },
      { label: "Flor de Cereja e Abacate — repara", price: 35.90, code: "155601", image: "" },
      { label: "Chá de Hortelã e Gengibre — detox", price: 35.90, code: "196324", image: "" }
    ]
  },
  {
    id: 82, name: "Natura Tododia Condicionador 280 ml", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Condicionadores Tododia para cada tipo de fio. Refil disponível.",
    image: "", options: [
      { label: "Manga Rosa e Água de Coco — nutre", price: 33.90, code: "190391", image: "" },
      { label: "Maçã Verde e Aloe Vera — hidrata", price: 37.90, code: "154873", image: "" },
      { label: "Pêssego e Amêndoa — nutre", price: 37.90, code: "154870", image: "" },
      { label: "Framboesa e Jojoba — liso + liso", price: 37.90, code: "221580", image: "" },
      { label: "Amora e Óleo de Coco — cachos e crespos", price: 37.90, code: "173587", image: "" },
      { label: "Flor de Cereja e Abacate — repara", price: 37.90, code: "154876", image: "" },
      { label: "Chá de Hortelã e Gengibre — detox", price: 37.90, code: "196328", image: "" }
    ]
  },
  {
    id: 83, name: "Natura Tododia Refil Shampoo 300 ml", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Refil do shampoo Tododia — até 30% de economia.",
    image: "", options: [
      { label: "Maçã Verde e Aloe Vera", price: 27.90, code: "154868", image: "" },
      { label: "Pêssego e Amêndoa — nutritivo", price: 27.90, code: "154867", image: "" },
      { label: "Framboesa e Jojoba — liso + liso", price: 27.90, code: "221579", image: "" },
      { label: "Amora e Óleo de Coco — cachos e crespos", price: 27.90, code: "173585", image: "" },
      { label: "Flor de Cereja e Abacate — reparador", price: 27.90, code: "154865", image: "" },
      { label: "Chá de Hortelã e Gengibre — detox", price: 27.90, code: "196327", image: "" }
    ]
  },
  {
    id: 84, name: "Natura Tododia Refil Condicionador 280 ml", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Refil do condicionador Tododia.",
    image: "", options: [
      { label: "Maçã Verde e Aloe Vera", price: 28.90, code: "154860", image: "" },
      { label: "Pêssego e Amêndoa — nutritivo", price: 28.90, code: "154859", image: "" },
      { label: "Framboesa e Jojoba — liso + liso", price: 28.90, code: "221577", image: "" },
      { label: "Amora e Óleo de Coco — cachos e crespos", price: 28.90, code: "173589", image: "" },
      { label: "Flor de Cereja e Abacate — reparador", price: 28.90, code: "154861", image: "" },
      { label: "Chá de Hortelã e Gengibre — detox", price: 28.90, code: "196323", image: "" }
    ]
  },
  {
    id: 85, name: "Natura Tododia Creme para Pentear", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Cremes para pentear que desembaraçam e tratam os fios.",
    image: "", options: [
      { label: "Nutritivo 180 ml", price: 35.90, code: "156237", image: "" },
      { label: "Refil Nutritivo 180 ml", price: 27.90, code: "156236", image: "" },
      { label: "Reparador 180 ml", price: 35.90, code: "156233", image: "" },
      { label: "Refil Reparador 180 ml", price: 27.90, code: "156234", image: "" },
      { label: "Cachos 280 ml", price: 39.90, code: "173581", image: "" },
      { label: "Refil Cachos 280 ml", price: 29.90, code: "173586", image: "" },
      { label: "Crespos 280 ml", price: 39.90, code: "173584", image: "" },
      { label: "Refil Crespos 280 ml", price: 29.90, code: "173582", image: "" }
    ]
  },
  {
    id: 86, name: "Natura Tododia Máscara Capilar Cronocapilar 250 ml", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Máscara concentrada do cronograma capilar. Refil disponível.",
    image: "", options: [
      { label: "Reparação — Flor de Cereja e Abacate", price: 51.90, code: "154875", image: "" },
      { label: "Nutrição — Pêssego e Amêndoa", price: 51.90, code: "154872", image: "" },
      { label: "Hidratação — Maçã Verde e Aloe Vera", price: 51.90, code: "154871", image: "" }
    ]
  },
  {
    id: 87, name: "Natura Tododia Refil Máscara Capilar Cronocapilar 250 ml", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Refil da máscara concentrada do cronograma capilar.",
    image: "", options: [
      { label: "Reparação — Flor de Cereja e Abacate", price: 38.90, code: "154864", image: "" },
      { label: "Nutrição — Pêssego e Amêndoa", price: 38.90, code: "154863", image: "" },
      { label: "Hidratação — Maçã Verde e Aloe Vera", price: 38.90, code: "154862", image: "" }
    ]
  },
  {
    id: 88, name: "Natura Tododia Essência para Cabelo 60 ml", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Seus cabelos perfumados com essências Tododia.",
    image: "", options: [
      { label: "Cereja e Avelã", price: 49.90, code: "176406", image: "" },
      { label: "Flor de Ameixa", price: 49.90, code: "174032", image: "" }
    ]
  },
  {
    id: 89, name: "Natura Tododia Finalizadores", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "Leave-in, gelatina e sprays para finalizar e reativar os cachos.",
    image: "", options: [
      { label: "Leave-in Liso + Liso 110 ml", price: 45.90, code: "221578", image: "" },
      { label: "Gelatina Cachos e Crespos 240 g", price: 39.90, code: "173590", image: "" },
      { label: "Spray Reativador Cachos e Crespos 200 ml", price: 45.90, code: "173583", image: "" },
      { label: "Spray Multi Manga Rosa e Água de Coco 200 ml", price: 40.90, code: "192102", image: "" },
      { label: "Spray Hidratante Maçã Verde e Aloe Vera 200 ml", price: 45.99, code: "156235", image: "" }
    ]
  },
  {
    id: 90, name: "Natura Tododia Kit Cabelos Nutrição Manga Rosa e Água de Coco", brand: "Natura", line: "Tododia",
    category: "Cabelos", description: "1 Shampoo 300 ml + 1 Condicionador 280 ml.",
    image: "", options: [ { label: "Kit", price: 58.90, code: "234125", image: "" } ]
  },

  /* ======================= CABELOS — LUMINA ======================= */

  {
    id: 91, name: "Natura Lumina Antiqueda e Crescimento", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Novo sistema de tratamento antiqueda e crescimento: combate a queda e evita a quebra dos fios.",
    image: "", options: [
      { label: "Shampoo Estimulante 300 ml", price: 47.90, code: "210525", image: "" },
      { label: "Condicionador Fortificante 300 ml", price: 63.90, code: "210527", image: "" },
      { label: "Máscara Condicionadora Antiquebra 250 ml", price: 44.90, code: "210529", image: "" },
      { label: "Sérum Noturno Antiqueda 100 ml", price: 76.90, code: "210531", image: "" },
      { label: "Esfoliante Capilar Pré-Shampoo 70 g", price: 55.90, code: "255761", image: "" },
      { label: "Escova Massageadora de Couro Cabeludo", price: 79.90, code: "224018", image: "" },
      { label: "Kit Antiqueda e Crescimento", price: 136.90, code: "273942", image: "" }
    ]
  },
  {
    id: 92, name: "Natura Lumina Hidratação e Proteção Antipoluição", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Reverte os danos da poluição, com hidratação e proteção.",
    image: "", options: [
      { label: "Shampoo Reparador 300 ml", price: 53.90, code: "164516", image: "" },
      { label: "Refil Shampoo Reparador 300 ml", price: 39.90, code: "164509", image: "" },
      { label: "Condicionador Reparador 300 ml", price: 56.90, code: "164517", image: "" },
      { label: "Refil Condicionador Reparador 300 ml", price: 42.90, code: "164512", image: "" },
      { label: "Máscara Reparadora 250 ml", price: 79.90, code: "164505", image: "" },
      { label: "Protetor Térmico Reparador 150 ml", price: 82.90, code: "164518", image: "" },
      { label: "Sérum Noturno Reparador 100 ml", price: 82.90, code: "164508", image: "" },
      { label: "Shampoo Purificante 300 ml", price: 53.90, code: "147416", image: "" },
      { label: "Refil Shampoo Purificante 300 ml", price: 39.90, code: "147414", image: "" },
      { label: "Condicionador Protetor 300 ml", price: 56.90, code: "147446", image: "" },
      { label: "Refil Condicionador Protetor 300 ml", price: 42.90, code: "147402", image: "" },
      { label: "Máscara Hidratante 250 ml", price: 79.90, code: "200649", image: "" },
      { label: "Refil Máscara Hidratante 250 ml", price: 59.90, code: "200647", image: "" },
      { label: "Spray de Pentear Antipoluição 150 ml", price: 61.90, code: "147434", image: "" },
      { label: "Kit Shampoo + Condicionador", price: 89.80, code: "204411", image: "" },
      { label: "Kit Máscara Hidratante + Refil", price: 69.90, code: "273943", image: "" }
    ]
  },
  {
    id: 93, name: "Natura Lumina Brilho e Proteção da Cor", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Para cabelos opacos ou com coloração.",
    image: "", options: [
      { label: "Shampoo Revitalizante 300 ml", price: 53.90, code: "148176", image: "" },
      { label: "Refil Shampoo Revitalizante 300 ml", price: 39.90, code: "148175", image: "" },
      { label: "Condicionador Protetor da Cor 300 ml", price: 56.90, code: "148433", image: "" },
      { label: "Refil Condicionador Protetor da Cor 300 ml", price: 42.90, code: "148405", image: "" },
      { label: "Máscara de Blindagem 220 ml", price: 79.90, code: "148410", image: "" },
      { label: "Spray Antidesbotamento e Brilho 150 ml", price: 82.90, code: "148449", image: "" }
    ]
  },
  {
    id: 94, name: "Natura Lumina Regenerador Capilar Antissinais", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Previne e reverte a aparição dos fios brancos.",
    image: "", options: [
      { label: "Shampoo de Tratamento Antissinais 300 ml", price: 56.90, code: "174206", image: "" },
      { label: "Refil Shampoo Antissinais 300 ml", price: 41.90, code: "174194", image: "" },
      { label: "Condicionador Antissinais 300 ml", price: 59.90, code: "174212", image: "" },
      { label: "Refil Condicionador Antissinais 300 ml", price: 44.90, code: "174187", image: "" },
      { label: "Máscara Antissinais 250 ml", price: 79.90, code: "174196", image: "" },
      { label: "Leave-in Densificador Antissinais 150 ml", price: 96.90, code: "176398", image: "" },
      { label: "Sérum de Prevenção Antissinais 100 ml", price: 96.90, code: "176050", image: "" }
    ]
  },
  {
    id: 95, name: "Natura Lumina Restauração de Danos Extremos", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Para cabelos quimicamente danificados.",
    image: "", options: [
      { label: "Shampoo Restaurador 300 ml", price: 53.90, code: "167286", image: "" },
      { label: "Refil Shampoo Restaurador 300 ml", price: 39.90, code: "167294", image: "" },
      { label: "Condicionador Restaurador 300 ml", price: 56.90, code: "167291", image: "" },
      { label: "Refil Condicionador Restaurador 300 ml", price: 42.90, code: "167285", image: "" },
      { label: "Máscara Restauradora 250 ml", price: 79.90, code: "167289", image: "" },
      { label: "Spray de Aminoácidos Pré-Secagem 150 ml", price: 82.90, code: "167288", image: "" },
      { label: "Máscara Regeneradora 250 ml", price: 79.90, code: "148412", image: "" },
      { label: "Kit Tratamento Intensivo", price: 149.90, code: "148448", image: "" },
      { label: "Sérum Regenerador Progressivo 100 ml", price: 82.90, code: "148421", image: "" }
    ]
  },
  {
    id: 96, name: "Natura Lumina Restauração e Liso Prolongado", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Para cabelos lisos ou alisados.",
    image: "", options: [
      { label: "Shampoo Reestruturante 300 ml", price: 53.90, code: "148170", image: "" },
      { label: "Refil Shampoo Reestruturante 300 ml", price: 39.90, code: "148177", image: "" },
      { label: "Condicionador Provitalidade 300 ml", price: 56.90, code: "148442", image: "" },
      { label: "Refil Condicionador Provitalidade 300 ml", price: 42.90, code: "148399", image: "" },
      { label: "Máscara Regeneradora 50 ml", price: 33.90, code: "150304", image: "" }
    ]
  },
  {
    id: 97, name: "Natura Lumina Definição e Hidratação para Cachos", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Definição intensa para cabelos cacheados e crespos.",
    image: "", options: [
      { label: "Shampoo Hidratante 300 ml", price: 53.90, code: "148171", image: "" },
      { label: "Refil Shampoo Hidratante 300 ml", price: 39.90, code: "148169", image: "" },
      { label: "Condicionador Hidratante 300 ml", price: 56.90, code: "148411", image: "" },
      { label: "Refil Condicionador Hidratante 300 ml", price: 42.90, code: "148413", image: "" },
      { label: "Shampoo Cremoso 300 ml", price: 53.90, code: "148161", image: "" },
      { label: "Refil Shampoo Cremoso 300 ml", price: 39.90, code: "148162", image: "" },
      { label: "Condicionador Nutritivo 300 ml", price: 56.90, code: "148409", image: "" },
      { label: "Refil Condicionador Nutritivo 300 ml", price: 42.90, code: "148400", image: "" },
      { label: "Máscara Reconstrutora 250 ml", price: 79.90, code: "148417", image: "" },
      { label: "Máscara Recuperadora 250 ml", price: 79.90, code: "148440", image: "" },
      { label: "Creme de Pentear de Definição 300 ml", price: 59.90, code: "148437", image: "" },
      { label: "Refil Creme de Pentear 300 ml", price: 45.90, code: "148403", image: "" },
      { label: "Creme de Pentear Ativador 300 ml", price: 59.90, code: "148436", image: "" },
      { label: "Refil Creme de Pentear Ativador 300 ml", price: 45.90, code: "148432", image: "" },
      { label: "Gelatina de Definição e Brilho 240 g", price: 59.90, code: "148404", image: "" },
      { label: "Spray Umidificador Reativador 150 ml", price: 82.90, code: "148419", image: "" }
    ]
  },
  {
    id: 98, name: "Natura Lumina Nutrição de Nanoprecisão", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Nutrição imediata sem pesar, para brilho prolongado por até 96 horas.",
    image: "", options: [
      { label: "Shampoo Nutrição 300 ml", price: 53.90, code: "200656", image: "" },
      { label: "Refil Shampoo Nutrição 300 ml", price: 39.90, code: "200643", image: "" },
      { label: "Condicionador Nutrição 300 ml", price: 56.90, code: "200658", image: "" },
      { label: "Refil Condicionador Nutrição 300 ml", price: 42.90, code: "200648", image: "" },
      { label: "Máscara Nutrição 250 ml", price: 79.90, code: "200641", image: "" },
      { label: "Refil Máscara Nutrição 250 ml", price: 59.90, code: "200645", image: "" },
      { label: "Óleo Bifásico Nutrição 100 ml", price: 82.90, code: "205931", image: "" }
    ]
  },
  {
    id: 99, name: "Natura Lumina Antioleosidade, Anticaspa e Matização", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Controle da oleosidade, caspa e matização progressiva.",
    image: "", options: [
      { label: "Shampoo Equilibrante 300 ml", price: 56.90, code: "147449", image: "" },
      { label: "Refil Shampoo Equilibrante 300 ml", price: 41.90, code: "147442", image: "" },
      { label: "Condicionador Suave 300 ml", price: 59.90, code: "147401", image: "" },
      { label: "Refil Condicionador Suave 300 ml", price: 44.90, code: "147445", image: "" },
      { label: "Tônico de Tratamento Intensivo 100 ml", price: 96.90, code: "147457", image: "" },
      { label: "Shampoo Reequilibrante 300 ml", price: 56.90, code: "147420", image: "" },
      { label: "Refil Shampoo Reequilibrante 300 ml", price: 41.90, code: "147408", image: "" },
      { label: "Leave-in Matizador 150 ml", price: 82.90, code: "148450", image: "" },
      { label: "Shampoo Matizador 300 ml", price: 53.90, code: "148158", image: "" },
      { label: "Ampola Matização e Restauração 4 x 20 ml", price: 82.90, code: "148159", image: "" }
    ]
  },
  {
    id: 100, name: "Natura Lumina Finalizadores e Tratamento", brand: "Natura", line: "Lumina",
    category: "Cabelos", description: "Finalização e proteção dos fios.",
    image: "", options: [
      { label: "Shampoo a Seco 10 g", price: 89.90, code: "140028", image: "" },
      { label: "Protetor Térmico 150 ml", price: 82.90, code: "148459", image: "" },
      { label: "Essência Sublime 30 ml", price: 82.90, code: "171367", image: "" },
      { label: "Shampoo Detox 300 ml", price: 53.90, code: "147404", image: "" },
      { label: "Óleo Leve Reparador 100 ml", price: 82.90, code: "147439", image: "" },
      { label: "Essência 30 ml", price: 82.90, code: "148167", image: "" },
      { label: "Máscara Reparadora 250 ml", price: 79.90, code: "147418", image: "" },
      { label: "Creme de Pentear Selador de Cutículas 250 ml", price: 59.90, code: "147453", image: "" },
      { label: "Refil Selador de Cutículas 250 ml", price: 45.90, code: "147406", image: "" },
      { label: "Shampoo Nutritivo 300 ml", price: 53.90, code: "147411", image: "" },
      { label: "Refil Shampoo Nutritivo 300 ml", price: 39.90, code: "147412", image: "" },
      { label: "Condicionador Polinutrição 300 ml", price: 56.90, code: "147440", image: "" },
      { label: "Refil Condicionador Polinutrição 300 ml", price: 42.90, code: "147410", image: "" }
    ]
  },

  /* ======================= CABELOS — EKOS ======================= */

  {
    id: 101, name: "Natura Ekos Cabelos Patauá Antiqueda", brand: "Natura", line: "Ekos",
    category: "Cabelos", description: "A potência da floresta em rituais para os cabelos.",
    image: "", options: [
      { label: "Shampoo 300 ml", price: 59.90, code: "113409", image: "" },
      { label: "Refil Shampoo 300 ml", price: 45.90, code: "112766", image: "" },
      { label: "Condicionador 300 ml", price: 62.90, code: "113245", image: "" },
      { label: "Refil Condicionador 300 ml", price: 47.90, code: "112768", image: "" },
      { label: "Máscara Fortalecedora 200 g", price: 84.90, code: "112777", image: "" },
      { label: "Tônico Noturno de Crescimento 30 ml", price: 79.90, code: "112776", image: "" },
      { label: "Óleo Fortalecedor Finalizador 60 ml", price: 99.90, code: "122499", image: "" }
    ]
  },
  {
    id: 102, name: "Natura Ekos Cabelos Murumuru Antidanos", brand: "Natura", line: "Ekos",
    category: "Cabelos", description: "Reconstrói os fios e reduz as pontas duplas em até 3 vezes.",
    image: "", options: [
      { label: "Shampoo 300 ml", price: 59.90, code: "113243", image: "" },
      { label: "Refil Shampoo 300 ml", price: 45.90, code: "112760", image: "" },
      { label: "Condicionador 300 ml", price: 62.90, code: "113244", image: "" },
      { label: "Refil Condicionador 300 ml", price: 47.90, code: "112762", image: "" },
      { label: "Máscara Reconstrutora 200 g", price: 84.90, code: "112771", image: "" },
      { label: "Máscara Pré-Shampoo 100 g", price: 64.90, code: "113150", image: "" },
      { label: "Sérum Noturno Nutritivo 30 ml", price: 79.90, code: "112892", image: "" },
      { label: "Creme para Pentear Multibenefícios 150 ml", price: 64.90, code: "112770", image: "" },
      { label: "Kit Shampoo Murumuru (2 x 300 ml)", price: 72.80, code: "273944", image: "" },
      { label: "Kit Condicionador Murumuru (2 x 300 ml)", price: 75.80, code: "273945", image: "" }
    ]
  },

  /* ======================= MAQUIAGEM ======================= */

  {
    id: 103, name: "Natura Faces Base Líquida Checkmatte 25 ml", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Cobertura construível com acabamento matte. 24 tons.",
    image: "", options: [
      { label: "10N", price: 33.90, code: "166338", image: "" },
      { label: "12F", price: 33.90, code: "166332", image: "" },
      { label: "15Q", price: 33.90, code: "166341", image: "" },
      { label: "16F", price: 33.90, code: "166335", image: "" },
      { label: "19N", price: 33.90, code: "166329", image: "" },
      { label: "20N", price: 33.90, code: "166330", image: "" },
      { label: "21Q", price: 33.90, code: "166345", image: "" },
      { label: "23F", price: 33.90, code: "166349", image: "" },
      { label: "24F", price: 33.90, code: "166328", image: "" },
      { label: "25Q", price: 33.90, code: "166340", image: "" },
      { label: "27N", price: 33.90, code: "166333", image: "" },
      { label: "29N", price: 33.90, code: "166344", image: "" },
      { label: "30F", price: 33.90, code: "166343", image: "" },
      { label: "31N", price: 33.90, code: "166327", image: "" },
      { label: "32Q", price: 33.90, code: "166326", image: "" },
      { label: "33N", price: 33.90, code: "166347", image: "" },
      { label: "35N", price: 33.90, code: "166346", image: "" },
      { label: "35Q", price: 33.90, code: "166337", image: "" },
      { label: "37Q", price: 33.90, code: "166342", image: "" },
      { label: "40Q", price: 33.90, code: "166334", image: "" },
      { label: "43N", price: 33.90, code: "166336", image: "" },
      { label: "44N", price: 33.90, code: "166331", image: "" },
      { label: "46Q", price: 33.90, code: "166339", image: "" },
      { label: "48F", price: 33.90, code: "166348", image: "" }
    ]
  },
  {
    id: 104, name: "Natura Faces Base Líquida HD 30 ml", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Cobertura alta com acabamento natural, até 24 h de duração e hidratação. Refil disponível.",
    image: "", options: [
      { label: "Base Líquida HD 30 ml", price: 159.90, code: "191639", image: "" },
      { label: "Refil Base Líquida HD 30 ml", price: 109.90, code: "173602", image: "" }
    ]
  },
  {
    id: 105, name: "Natura Faces Base Matte Powder 20 g", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Para pele normal a oleosa, cobertura alta com até 24 h de duração.",
    image: "", options: [
      { label: "Base Matte Powder 20 g", price: 139.90, code: "PAI127768", image: "" }
    ]
  },
  {
    id: 106, name: "Natura Faces Base Sérum Nude Me 30 ml", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Cobertura leve a alta, recupera a energia celular e deixa a pele com aparência descansada.",
    image: "", options: [
      { label: "10N", price: 179.90, code: "110181", image: "" },
      { label: "12F", price: 179.90, code: "110182", image: "" },
      { label: "15Q", price: 179.90, code: "110183", image: "" },
      { label: "20N", price: 179.90, code: "110186", image: "" },
      { label: "21Q", price: 179.90, code: "110187", image: "" },
      { label: "23F", price: 179.90, code: "110188", image: "" },
      { label: "29N", price: 179.90, code: "110192", image: "" },
      { label: "31N", price: 179.90, code: "110194", image: "" },
      { label: "32Q", price: 179.90, code: "110195", image: "" }
    ]
  },
  {
    id: 107, name: "Natura Faces Base Stick FPS 50 12 g", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Fácil de aplicar e espalhar, protege a pele dos danos causados pelo sol.",
    image: "", options: [
      { label: "12F", price: 119.90, code: "181513", image: "" },
      { label: "15Q", price: 119.90, code: "181518", image: "" },
      { label: "23F", price: 119.90, code: "181509", image: "" },
      { label: "32Q", price: 119.90, code: "181516", image: "" },
      { label: "35Q", price: 119.90, code: "181517", image: "" },
      { label: "40Q", price: 119.90, code: "181519", image: "" }
    ]
  },
  {
    id: 108, name: "Natura Faces Base Tint Extremo Conforto FPS 40 30 ml", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Cobertura leve e acabamento natural, com triplo ácido hialurônico e até 72 h de hidratação.",
    image: "", options: [ { label: "30 ml", price: 79.90, code: "135047", image: "" } ]
  },
  {
    id: 109, name: "Natura Faces Corretivo", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Corretivos para disfarçar olheiras e imperfeições.",
    image: "", options: [
      { label: "Corretivo Hidratante 24h 4 ml", price: 56.90, code: "205981", image: "" },
      { label: "Corretivo Cobertura Extrema 24h 8 ml", price: 62.90, code: "122122", image: "" }
    ]
  },
  {
    id: 110, name: "Natura Faces Pó Compacto e Pó Solto", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Pós faciais de acabamento matte e natural.",
    image: "", options: [
      { label: "Pó Compacto Matte 6,5 g", price: 39.90, code: "8882", image: "" },
      { label: "Refil Pó Compacto Matte", price: 39.90, code: "9025", image: "" },
      { label: "Pó Compacto Nude Me 10 g", price: 64.90, code: "110682", image: "" },
      { label: "Refil Pó Compacto Nude Me", price: 64.90, code: "110678", image: "" },
      { label: "Pó Solto Facial Translúcido Matte Natural 8 g", price: 119.90, code: "165384", image: "" },
      { label: "Pó Solto Facial Translúcido Luminoso 8 g", price: 119.90, code: "165814", image: "" }
    ]
  },
  {
    id: 111, name: "Natura Faces Blush", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Blushes com alta pigmentação para bochechas e olhos.",
    image: "", options: [
      { label: "Blush Matte 2,8 g — Apple Bloom", price: 59.90, code: "209243", image: "" },
      { label: "Blush Matte 2,8 g — Berry Fever", price: 59.90, code: "209253", image: "" },
      { label: "Blush Matte 2,8 g — Sunset", price: 59.90, code: "209256", image: "" },
      { label: "Blush Intense Me 6 g — Bronze Perolado", price: 69.90, code: "92576", image: "" },
      { label: "Blush Intense Me 6 g — Rosê Matte", price: 69.90, code: "92584", image: "" },
      { label: "Blush Intense Me 6 g — Uva Matte", price: 69.90, code: "72020", image: "" },
      { label: "Blush Intense Me 6 g — Coral Perolado", price: 69.90, code: "92595", image: "" },
      { label: "Blush Líquido Radiance 5 ml", price: 79.90, code: "205326", image: "" }
    ]
  },
  {
    id: 112, name: "Natura Faces Iluminador e Primer", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Iluminador marmorizado e primer blur.",
    image: "", options: [
      { label: "Iluminador Marmorizado Corpo e Rosto 3,5 g", price: 69.90, code: "24865", image: "" },
      { label: "Primer Blur 30 ml", price: 89.90, code: "59313", image: "" },
      { label: "Bruma Facial Hidratante Fixadora 100 ml", price: 74.90, code: "153720", image: "" }
    ]
  },
  {
    id: 113, name: "Natura Faces Olhos", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Máscaras de cílios, lápis, delineadores e paletas para um olhar marcante.",
    image: "", options: [
      { label: "Máscara Volume Fever 7 ml", price: 56.90, code: "216703", image: "" },
      { label: "Máscara Incolor 7 ml", price: 49.90, code: "220914", image: "" },
      { label: "Máscara Megafantástica 7 ml", price: 56.90, code: "216706", image: "" },
      { label: "Máscara de Cílios Extreme Multibenefícios 8 ml", price: 109.90, code: "192103", image: "" },
      { label: "Máscara para Cílios Multi HD 9 g", price: 116.90, code: "174921", image: "" },
      { label: "Máscara para Cílios Alongamento Infinito 8 ml", price: 89.90, code: "106122", image: "" },
      { label: "Lápis de Olhos Preto 1,3 g", price: 39.90, code: "209252", image: "" },
      { label: "Lápis de Olhos Marrom 1,3 g", price: 39.90, code: "209242", image: "" },
      { label: "Delineador Caneta Preto 1,2 ml", price: 37.90, code: "209255", image: "" },
      { label: "Caneta Delineadora para Olhos 1 ml", price: 74.90, code: "34262", image: "" },
      { label: "Delineador Matte Peel Off Preto 3 ml", price: 74.90, code: "95757", image: "" },
      { label: "Lápis para Olhos Preto 1,3 g", price: 31.90, code: "177718", image: "" },
      { label: "Delineador Retrátil 280 mg", price: 29.90, code: "177725", image: "" },
      { label: "Lápis Kajal para Olhos 1,14 g — Preto", price: 55.90, code: "70720", image: "" },
      { label: "Lápis Kajal para Olhos 1,14 g — Marrom", price: 55.90, code: "70721", image: "" },
      { label: "Sérum para Sobrancelhas Extremific 4 g", price: 139.90, code: "140742", image: "" },
      { label: "Caneta Delineadora de Sobrancelhas 1,1 ml", price: 74.90, code: "17043", image: "" }
    ]
  },
  {
    id: 114, name: "Natura Faces Paleta de Sombras", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Alta pigmentação e textura fina aveludada, com espelho removível.",
    image: "", options: [
      { label: "Paleta Tons Quentes 8,4 g", price: 89.90, code: "209241", image: "" },
      { label: "Paleta Tons Frios 8,4 g", price: 74.90, code: "216455", image: "" },
      { label: "PRO Palette Bronze 7 g", price: 169.90, code: "171114", image: "" },
      { label: "PRO Palette Nude 2C 7 g", price: 169.90, code: "205934", image: "" },
      { label: "PRO Palette Âmbar 7 g", price: 134.90, code: "214404", image: "" },
      { label: "PRO Palette Rubi 7 g", price: 134.90, code: "171115", image: "" }
    ]
  },
  {
    id: 115, name: "Natura Faces Lábios", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Batons, glosses, balms e lápis labiais.",
    image: "", options: [
      { label: "Batom Matte 3,5 g", price: 24.90, code: "216422", image: "" },
      { label: "Batom Cremoso 3,5 g", price: 24.90, code: "216446", image: "" },
      { label: "Balm Labial 13,5 ml", price: 39.90, code: "209254", image: "" },
      { label: "Lápis Labial 1,1 g", price: 42.90, code: "209257", image: "" },
      { label: "Batom Líquido Matte 4,5 ml", price: 59.90, code: "236326", image: "" },
      { label: "Gloss Labial 4 g", price: 72.90, code: "211663", image: "" },
      { label: "Lápis para Lábios Color & Contour 1,4 g", price: 25.90, code: "9583", image: "" },
      { label: "Batom Matte Longa Duração 5,5 ml", price: 34.90, code: "177716", image: "" },
      { label: "Batom Líquido Matte Intransferível 7 ml", price: 51.90, code: "140030", image: "" },
      { label: "Gloss Labial Volume Imediato Incolor 5 ml", price: 59.90, code: "164824", image: "" },
      { label: "Gloss Labial Hidratação Ativa Una 5 ml", price: 69.90, code: "205337", image: "" },
      { label: "Gloss Labial Hidratação Ativa 5 ml", price: 59.90, code: "164820", image: "" },
      { label: "Gloss Multifuncional 7 g", price: 49.90, code: "192148", image: "" },
      { label: "Batom CC Hidratante FPS 25 3,8 g", price: 69.90, code: "167296", image: "" },
      { label: "Batom Líquido Ultra Care 24h 7 ml", price: 54.90, code: "148471", image: "" },
      { label: "Lápis Labial Retrátil PRO 3,5 g", price: 62.90, code: "204432", image: "" },
      { label: "Batom Líquido Blur Una 5 ml", price: 49.90, code: "205325", image: "" }
    ]
  },
  {
    id: 116, name: "Natura Faces Bálsamo Demaquilante 45 g", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Textura cremosa que limpa, demaquila e hidrata.",
    image: "", options: [ { label: "45 g", price: 63.90, code: "236332", image: "" } ]
  },
  {
    id: 117, name: "Natura Faces Pincéis PRO", brand: "Natura", line: "Faces",
    category: "Maquiagem", description: "Pincéis com cerdas ultramacias e acabamento profissional.",
    image: "", options: [
      { label: "Pincel PRO Iluminador", price: 54.90, code: "105713", image: "" },
      { label: "Pincel PRO Precisão", price: 38.90, code: "105716", image: "" },
      { label: "Pincel PRO Duo Fibras", price: 69.90, code: "58406", image: "" },
      { label: "Pincel PRO Pó Compacto", price: 79.90, code: "55105", image: "" },
      { label: "Pincel PRO Base Cremosa", price: 69.90, code: "109002", image: "" },
      { label: "Pincel PRO Esfumador", price: 38.90, code: "105715", image: "" },
      { label: "Pincel PRO Lábios", price: 34.90, code: "55107", image: "" },
      { label: "Pincel PRO Corretivo", price: 49.90, code: "105714", image: "" },
      { label: "Pincel PRO Sobrancelhas", price: 36.90, code: "105717", image: "" },
      { label: "Estojo de Maquiagem Rosa Metalizado", price: 64.90, code: "71663", image: "" }
    ]
  },

  /* ======================= ROSTO & TRATAMENTO — CHRONOS ======================= */

  {
    id: 118, name: "Natura Chronos Multiprotetor Clareador FPS 70 50 ml", brand: "Natura", line: "Chronos",
    category: "Rosto & Tratamento", description: "Protege do sol, clareia manchas solares e previne o fotoenvelhecimento.",
    image: "", options: [
      { label: "Incolor", price: 85.90, code: "183277", image: "" },
      { label: "Cor 1", price: 85.90, code: "183273", image: "" },
      { label: "Cor 2", price: 85.90, code: "183272", image: "" },
      { label: "Cor 3", price: 85.90, code: "183276", image: "" },
      { label: "Cor 4", price: 85.90, code: "183280", image: "" },
      { label: "Cor 5", price: 85.90, code: "183279", image: "" },
      { label: "Cor 6", price: 85.90, code: "183281", image: "" }
    ]
  },
  {
    id: 119, name: "Natura Chronos Proteção e Tratamento Facial", brand: "Natura", line: "Chronos",
    category: "Rosto & Tratamento", description: "Protege, previne e trata.",
    image: "", options: [
      { label: "Multiprotetor Antissinais FPS 50 50 ml", price: 110.00, code: "134189", image: "" },
      { label: "Protetor Antioleosidade Redutor de Poros FPS 30 50 ml", price: 105.00, code: "69725", image: "" },
      { label: "Essência de Tratamento Revitalização e Luminosidade 100 ml", price: 135.00, code: "135043", image: "" },
      { label: "Duo Essência de Tratamento Multiclareadora e Radiância 100 ml", price: 135.00, code: "187709", image: "" }
    ]
  },
  {
    id: 120, name: "Natura Chronos Séruns Intensivos", brand: "Natura", line: "Chronos",
    category: "Rosto & Tratamento", description: "Tratamento intensivo de acordo com as necessidades da sua pele. Refil disponível.",
    image: "", options: [
      { label: "Sérum Redutor de Oleosidade 30 ml", price: 205.00, code: "169229", image: "" },
      { label: "Refil Sérum Redutor de Oleosidade", price: 139.00, code: "169244", image: "" },
      { label: "Sérum Lifting e Firmeza 30 ml", price: 205.00, code: "169247", image: "" },
      { label: "Refil Sérum Lifting e Firmeza", price: 139.00, code: "168819", image: "" },
      { label: "Sérum Preenchedor Hidratante 30 ml", price: 205.00, code: "169233", image: "" },
      { label: "Refil Sérum Preenchedor Hidratante", price: 139.00, code: "168818", image: "" },
      { label: "Sérum para Bolsas e Olheiras 15 ml", price: 189.00, code: "127754", image: "" },
      { label: "Super Sérum para Olhos 15 ml", price: 205.00, code: "169258", image: "" },
      { label: "Refil Super Sérum para Olhos", price: 139.00, code: "169238", image: "" },
      { label: "Super Sérum Redutor de Rugas 30 ml", price: 242.00, code: "169264", image: "" },
      { label: "Refil Super Sérum Redutor de Rugas", price: 169.00, code: "169234", image: "" },
      { label: "Sérum Multiclareador 30 ml", price: 205.00, code: "169222", image: "" },
      { label: "Refil Sérum Multiclareador", price: 139.00, code: "169235", image: "" }
    ]
  },
  {
    id: 121, name: "Natura Chronos Hidratação Multibenefícios", brand: "Natura", line: "Chronos",
    category: "Rosto & Tratamento", description: "Cremes antissinais para cada faixa de idade, com refil.",
    image: "", options: [
      { label: "Gel Creme Antissinais 30+ 40 g", price: 159.00, code: "134725", image: "" },
      { label: "Gel Creme Antissinais 45+ Dia 40 g", price: 159.00, code: "134592", image: "" },
      { label: "Gel Creme Antissinais 45+ Noite 40 g", price: 159.00, code: "135032", image: "" },
      { label: "Creme Antissinais 60+ Dia 40 g", price: 159.00, code: "134693", image: "" },
      { label: "Creme Antissinais 80+ 40 g", price: 159.00, code: "134695", image: "" },
      { label: "Hidratante Acqua Renovador 40 g", price: 179.00, code: "91849", image: "" },
      { label: "Refil Hidratante Acqua Renovador", price: 144.00, code: "91819", image: "" },
      { label: "Balm para Olhos Redutor de Rugas 15 g", price: 115.00, code: "169217", image: "" },
      { label: "Balm Labial Reparador Hidratante 15 ml", price: 59.00, code: "167236", image: "" }
    ]
  },
  {
    id: 122, name: "Natura Chronos Limpeza Facial", brand: "Natura", line: "Chronos",
    category: "Rosto & Tratamento", description: "Seu tratamento começa com a limpeza ideal.",
    image: "", options: [
      { label: "Sabonete em Óleo Limpeza Demaquilante 125 ml", price: 91.00, code: "171365", image: "" },
      { label: "Demaquilante Bifásico Intensivo 150 ml", price: 85.00, code: "137976", image: "" },
      { label: "Água Micelar Demaquilante Suave 150 ml", price: 85.00, code: "133503", image: "" },
      { label: "Triplo Esfoliante Peeling Antissinais 50 g", price: 85.00, code: "135057", image: "" },
      { label: "Sabonete em Espuma Limpeza Suave 150 ml", price: 91.00, code: "135060", image: "" },
      { label: "Limpeza Purificante Antioleosidade 130 g", price: 85.00, code: "69720", image: "" },
      { label: "Sabonete em Mousse Limpeza Intensiva 85 g", price: 85.00, code: "134586", image: "" }
    ]
  },

  /* ======================= INFANTIL ======================= */

  {
    id: 123, name: "Natura Mamãe e Bebê Shampoo, Condicionador e Sabonete", brand: "Natura", line: "Mamãe e Bebê",
    category: "Infantil", description: "O mesmo cuidado e segurança de sempre, agora em embalagens que rendem mais. Refil disponível.",
    image: "", options: [
      { label: "Shampoo 200 ml", price: 47.90, code: "92790", image: "" },
      { label: "Refil Shampoo 200 ml", price: 38.90, code: "92791", image: "" },
      { label: "Condicionador 200 ml", price: 47.90, code: "92793", image: "" },
      { label: "Refil Condicionador 200 ml", price: 38.90, code: "92794", image: "" },
      { label: "Sabonete Líquido 200 ml", price: 52.90, code: "92800", image: "" },
      { label: "Refil Sabonete Líquido 200 ml", price: 39.90, code: "92802", image: "" },
      { label: "Sabonete em Barra 5 x 100 g", price: 51.90, code: "92795", image: "" },
      { label: "Shampoo 400 ml", price: 58.90, code: "252008", image: "" },
      { label: "Sabonete Líquido 400 ml", price: 58.90, code: "252007", image: "" }
    ]
  },
  {
    id: 124, name: "Natura Mamãe e Bebê Hidratantes", brand: "Natura", line: "Mamãe e Bebê",
    category: "Infantil", description: "Fórmulas confiáveis em embalagens maiores e mais econômicas.",
    image: "", options: [
      { label: "Hidratante 200 ml", price: 69.90, code: "92804", image: "" },
      { label: "Refil Hidratante 200 ml", price: 54.20, code: "106418", image: "" },
      { label: "Hidratante 400 ml", price: 69.90, code: "252009", image: "" },
      { label: "Hidratante Relaxante 200 ml", price: 69.90, code: "92806", image: "" },
      { label: "Hidratante Preventivo de Estrias 200 ml", price: 92.90, code: "92808", image: "" },
      { label: "Creme Preventivo de Assaduras 60 g", price: 49.90, code: "97955", image: "" }
    ]
  },
  {
    id: 125, name: "Natura Mamãe e Bebê Colônias, Óleos e Lenços", brand: "Natura", line: "Mamãe e Bebê",
    category: "Infantil", description: "Cuidados delicados para o bebê e para a mamãe.",
    image: "", options: [
      { label: "Água de Colônia sem Álcool 100 ml", price: 106.90, code: "92786", image: "" },
      { label: "Água de Colônia Relaxante 100 ml", price: 106.90, code: "92788", image: "" },
      { label: "Óleo de Massagem no Bebê 100 ml", price: 65.90, code: "75234", image: "" },
      { label: "Óleo para Gestante 200 ml", price: 109.90, code: "75233", image: "" },
      { label: "Sabonete em Espuma Relaxante 200 ml", price: 59.90, code: "92952", image: "" },
      { label: "Lenços Umedecidos com Fragrância (50 folhas)", price: 36.90, code: "92798", image: "" },
      { label: "Linha Sem Fragrância — Sabonete Líquido 200 ml", price: 52.90, code: "106422", image: "" },
      { label: "Linha Sem Fragrância — Hidratante 200 ml", price: 69.90, code: "106423", image: "" }
    ]
  },
  {
    id: 126, name: "Natura Mamãe e Bebê Cachinhos e Crespinhos", brand: "Natura", line: "Mamãe e Bebê",
    category: "Infantil", description: "Cuidado especial para os cachinhos do bebê.",
    image: "", options: [
      { label: "Shampoo 200 ml", price: 47.90, code: "166870", image: "" },
      { label: "Condicionador 200 ml", price: 47.90, code: "166871", image: "" },
      { label: "Creme para Pentear 125 ml", price: 51.90, code: "167173", image: "" }
    ]
  },
  {
    id: 127, name: "Natura Mamãe e Bebê Kits e Presentes", brand: "Natura", line: "Mamãe e Bebê",
    category: "Infantil", description: "Kits e conjuntos para presentear.",
    image: "", options: [
      { label: "Kit Miniatura Mamãe e Bebê", price: 132.90, code: "169427", image: "" },
      { label: "Conjunto com Mala Maternidade", price: 495.90, code: "197576", image: "" },
      { label: "Conjunto com Bolsa e Trocador", price: 489.90, code: "187033", image: "" },
      { label: "Conjunto Papai e Bebê com Mochila", price: 489.90, code: "187035", image: "" },
      { label: "Conjunto com Frasqueira", price: 279.90, code: "187034", image: "" },
      { label: "Kit Minissabonetes Maternidade com Cesto", price: 155.90, code: "207390", image: "" }
    ]
  },
  {
    id: 128, name: "Natura Naturé Colônias e Sabonetes", brand: "Natura", line: "Naturé",
    category: "Infantil", description: "Criança feliz é criança que brinca! Cuidado e diversão para os pequenos.",
    image: "", options: [
      { label: "Colônia Catavento 100 ml", price: 99.90, code: "106421", image: "" },
      { label: "Colônia Corre Corre 100 ml", price: 99.90, code: "128757", image: "" },
      { label: "Colônia Pula Pula 100 ml", price: 99.90, code: "128758", image: "" },
      { label: "Sabonete Slime 125 ml", price: 31.90, code: "171352", image: "" },
      { label: "Sabonetes em Barra Naturés na Natureza 4 x 90 g", price: 49.90, code: "166022", image: "" },
      { label: "Sabonetes em Barra Quadradinhos 5 x 90 g", price: 47.90, code: "112788", image: "" },
      { label: "Sabonete Líquido 250 ml", price: 37.90, code: "102417", image: "" },
      { label: "Hidratante Corporal 125 ml", price: 42.90, code: "106496", image: "" },
      { label: "Kit Trio de Colônias", price: 199.90, code: "192089", image: "" }
    ]
  },
  {
    id: 129, name: "Natura Naturé Cabelos", brand: "Natura", line: "Naturé",
    category: "Infantil", description: "Shampoos, condicionadores e cremes para pentear para os pequenos.",
    image: "", options: [
      { label: "Shampoo 2 em 1 250 ml", price: 46.90, code: "102406", image: "" },
      { label: "Shampoo Cabelos Cacheados e Crespos 250 ml", price: 38.90, code: "102400", image: "" },
      { label: "Condicionador Cabelos Cacheados e Crespos 250 ml", price: 44.90, code: "102402", image: "" },
      { label: "Creme para Pentear Cacheados e Crespos 250 ml", price: 50.90, code: "102404", image: "" },
      { label: "Shampoo Cabelos Lisos e Ondulados 250 ml", price: 38.90, code: "102395", image: "" },
      { label: "Condicionador Cabelos Lisos e Ondulados 250 ml", price: 44.90, code: "102397", image: "" }
    ]
  },
  {
    id: 130, name: "Natura Naturé Presentes Dia das Crianças", brand: "Natura", line: "Naturé",
    category: "Infantil", description: "Para celebrar a diversão e a alegria de quem é importante para a gente.",
    image: "", options: [
      { label: "Diversão no Banho", price: 109.90, code: "252882", image: "" },
      { label: "Corre Corre", price: 74.90, code: "252883", image: "" },
      { label: "Corre Corre com Mochila", price: 279.90, code: "260169", image: "" },
      { label: "Catavento e Cachos", price: 134.90, code: "252884", image: "" },
      { label: "Catavento e Lisos", price: 134.90, code: "252885", image: "" }
    ]
  },

  /* ======================= PRESENTES ======================= */

  {
    id: 131, name: "Natura Presentes — Perfumaria", brand: "Natura", line: "Presentes",
    category: "Presentes", description: "Kits prontos para presentear com economia.",
    image: "", options: [
      { label: "Presente Luna Girl", price: 124.90, code: "252886", image: "" },
      { label: "Presente Luna Fascinante", price: 194.90, code: "242526", image: "" },
      { label: "Presente Kaiak Aventura Feminino", price: 249.90, code: "242220", image: "" },
      { label: "Presente Kaiak Vibe Masculino", price: 109.90, code: "252890", image: "" },
      { label: "Presente Kaiak Masculino", price: 114.90, code: "266577", image: "" },
      { label: "Presente Natura Homem Meninos", price: 124.90, code: "252887", image: "" },
      { label: "Presente Essencial Masculino", price: 284.90, code: "255783", image: "" },
      { label: "Presente Essencial Sabonetes", price: 29.90, code: "151560", image: "" },
      { label: "Presente Biografia Assinatura Masculino", price: 199.90, code: "245365", image: "" },
      { label: "Presente Kriska Flores", price: 164.90, code: "272386", image: "" },
      { label: "Presente Tododia Framboesa e Pimenta Vermelha", price: 174.90, code: "242240", image: "" },
      { label: "Presente Tododia Body Splashes Trio de Miniaturas", price: 109.90, code: "209219", image: "" }
    ]
  },
  {
    id: 132, name: "Natura Presentes — Corpo, Casa e Mamãe e Bebê", brand: "Natura", line: "Presentes",
    category: "Presentes", description: "Presentes para quem faz a diferença na vida da gente.",
    image: "", options: [
      { label: "Presente Mamãe e Bebê Relaxante", price: 179.90, code: "276734", image: "" },
      { label: "Presente Mamãe e Bebê Momento Chá de Bebê", price: 154.90, code: "185782", image: "" },
      { label: "Presente Mamãe e Bebê", price: 89.90, code: "277942", image: "" },
      { label: "Presente Ekos Cacau Hidratação Mãos e Lábios", price: 71.90, code: "171353", image: "" },
      { label: "Presente Tododia Meu Jardim de Flores", price: 53.90, code: "207881", image: "" },
      { label: "Presente Ekos Sabonetes em Barra Cacau e Castanha", price: 56.90, code: "179433", image: "" },
      { label: "Presente Crer Para Ver Caneta Estampada", price: 36.90, code: "213313", image: "" },
      { label: "Sacola de Presente G com Laço", price: 12.90, code: "161145", image: "" },
      { label: "Sacola de Presente M com Laço", price: 9.90, code: "167994", image: "" },
      { label: "Sacola de Presente P com Laço", price: 6.90, code: "161148", image: "" },
      { label: "Caixa de Presente G com Laço", price: 13.90, code: "154851", image: "" },
      { label: "Embalagem de Presente Redonda", price: 29.90, code: "148397", image: "" },
      { label: "Envelope de Presente", price: 6.00, code: "161999", image: "" }
    ]
  },

  /* ======================= CRER PARA VER ======================= */

  {
    id: 133, name: "Natura Crer Para Ver — Bolsas e Acessórios", brand: "Natura", line: "Crer Para Ver",
    category: "Presentes", description: "Transformando vidas por meio da educação.",
    image: "", options: [
      { label: "Maxi Bolsa Dobrável", price: 66.50, code: "129745", image: "" },
      { label: "Bolsa Crossbody", price: 92.90, code: "195636", image: "" },
      { label: "Mochila", price: 149.90, code: "218961", image: "" },
      { label: "Bolsa Sustentável", price: 65.90, code: "224727", image: "" },
      { label: "Nécessaire de Viagem", price: 60.90, code: "224729", image: "" },
      { label: "Case Organizador para Notebook", price: 79.90, code: "224725", image: "" },
      { label: "Frasqueira Térmica", price: 89.90, code: "218960", image: "" },
      { label: "Garrafa Térmica 500 ml", price: 110.90, code: "229549", image: "" },
      { label: "Garrafa Plástica 600 ml", price: 30.90, code: "195641", image: "" },
      { label: "Chaveiro", price: 14.90, code: "229539", image: "" }
    ]
  },
  {
    id: 134, name: "Natura Crer Para Ver — Casa e Papelaria", brand: "Natura", line: "Crer Para Ver",
    category: "Presentes", description: "Presenteie com propósito e transformação.",
    image: "", options: [
      { label: "Caneca Gratidão 300 ml", price: 44.90, code: "195642", image: "" },
      { label: "Caneca Coração 200 ml", price: 39.90, code: "224724", image: "" },
      { label: "Xícara e Pires", price: 39.90, code: "176440", image: "" },
      { label: "Tigela 500 ml", price: 49.90, code: "176444", image: "" },
      { label: "Caderno Mudando o Futuro", price: 49.90, code: "218962", image: "" },
      { label: "Duo Cadernos", price: 23.90, code: "195644", image: "" },
      { label: "Kit Lápis e Caneta", price: 25.90, code: "170766", image: "" },
      { label: "Saboneteira Granilite", price: 17.90, code: "241996", image: "" },
      { label: "Sacola Estampada", price: 8.50, code: "195646", image: "" },
      { label: "Sacola Premium Gratidão", price: 14.00, code: "195640", image: "" },
      { label: "Kit 3 Cartões de Presente", price: 9.90, code: "224738", image: "" }
    ]
  },

  /* ======================= CASA & BEM-ESTAR — NATURA BOTÂNICO ======================= */

  {
    id: 135, name: "Natura Bothânica Alta Perfumaria — Eau de Parfum 50 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Fragrâncias autorais que combinam ingredientes latino-americanos com clássicos da perfumaria mundial.",
    image: "", options: [
      { label: "505 Íris Priprioca — floral amadeirado", price: 395.00, code: "151028", image: "" },
      { label: "679 Ambrette Copaíba — musk amadeirado", price: 395.00, code: "151024", image: "" },
      { label: "740 Sândalo Breu-Branco — amadeirado especiado", price: 395.00, code: "151030", image: "" },
      { label: "875 Vetiver Capitiú — cítrico amadeirado", price: 395.00, code: "151025", image: "" }
    ]
  },
  {
    id: 136, name: "Natura Bothânica Perfume em Óleo 379 Benjoim Cumaru 15 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Fragrância com sensorial único, em formato conta-gotas.",
    image: "", options: [ { label: "15 ml", price: 195.00, code: "139038", image: "" } ]
  },
  {
    id: 137, name: "Natura Bothânica Coleção Eau de Parfum 4 x 10 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "As 4 fragrâncias de Alta Perfumaria em embalagens portáteis, para usar individualmente ou combinadas.",
    image: "", options: [ { label: "Coleção 4 x 10 ml", price: 395.00, code: "139034", image: "" } ]
  },
  {
    id: 138, name: "Natura Bothânica Difusores e Velas Perfumadas", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Fragrâncias para a casa, com refil disponível.",
    image: "", options: [
      { label: "Difusor 774 Rosa Capitiú 200 ml", price: 230.00, code: "159123", image: "" },
      { label: "Refil Difusor 861 Guaiaco Pataqueira 200 ml", price: 175.00, code: "159120", image: "" },
      { label: "Vela Perfumada 774 Rosa Capitiú 170 g", price: 210.00, code: "151029", image: "" },
      { label: "Difusor 861 Guaiaco Pataqueira 200 ml", price: 230.00, code: "159122", image: "" },
      { label: "Refil Difusor 774 Rosa Capitiú 200 ml", price: 175.00, code: "159121", image: "" },
      { label: "Vela Perfumada 861 Guaiaco Pataqueira 170 g", price: 210.00, code: "151027", image: "" }
    ]
  },
  {
    id: 139, name: "Natura Bothânica Blends de Óleos Essenciais Puros 10 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Óleos essenciais com benefícios funcionais da aromaterapia comprovados pela neurociência.",
    image: "", options: [
      { label: "Energizar — ânimo, energia e vitalidade", price: 150.00, code: "140040", image: "" },
      { label: "Restaurar — relaxa para dormir", price: 150.00, code: "140038", image: "" },
      { label: "Equilibrar — bem-estar e reduz estresse", price: 150.00, code: "140037", image: "" },
      { label: "Despertar — concentração e foco", price: 150.00, code: "140039", image: "" }
    ]
  },
  {
    id: 140, name: "Natura Bothânica Difusor de Cerâmica", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Ideal para usar com o Blend de Óleo Essencial Puro na prática da aromaterapia.",
    image: "", options: [
      { label: "Difusor de Cerâmica", price: 155.00, code: "180461", image: "" },
      { label: "Refil 2 Esferas de Argila", price: 93.00, code: "180462", image: "" }
    ]
  },
  {
    id: 141, name: "Natura Bothânica Difusor de Ambientes 230 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Lineia completa de produtos terapêuticos para cuidar e estimular a casa.",
    image: "", options: [
      { label: "Aura Gingi — frescor cítrico e aromático", price: 260.00, code: "167636", image: "" },
      { label: "Divinus Plantae — leveza verde e floral", price: 260.00, code: "167638", image: "" },
      { label: "Cyan Serenum — sutileza herbal e floral", price: 260.00, code: "167635", image: "" },
      { label: "Nobilis Antique — amadeirado intenso", price: 260.00, code: "167634", image: "" },
      { label: "Refil Aura Gingi 230 ml", price: 160.00, code: "170133", image: "" },
      { label: "Refil Divinus Plantae 230 ml", price: 160.00, code: "170137", image: "" },
      { label: "Refil Cyan Serenum 230 ml", price: 160.00, code: "170135", image: "" },
      { label: "Refil Nobilis Antique 230 ml", price: 160.00, code: "170139", image: "" }
    ]
  },
  {
    id: 142, name: "Natura Bothânica Velas Aromáticas 170 g", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Velas aromáticas que potencializam a experiência olfativa da casa.",
    image: "", options: [
      { label: "Aura Gingi", price: 210.00, code: "139249", image: "" },
      { label: "Divinus Plantae", price: 210.00, code: "139251", image: "" },
      { label: "Cyan Serenum", price: 210.00, code: "139250", image: "" },
      { label: "Nobilis Antique", price: 210.00, code: "139252", image: "" }
    ]
  },
  {
    id: 143, name: "Natura Bothânica Spray de Ambientes", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Explosão de fragrância para sua casa, com refil disponível.",
    image: "", options: [
      { label: "Cyan Serenum 200 ml", price: 168.00, code: "139802", image: "" },
      { label: "Refil Cyan Serenum 200 ml", price: 168.00, code: "140050", image: "" },
      { label: "Divinus Plantae 200 ml", price: 168.00, code: "139805", image: "" },
      { label: "Refil Divinus Plantae 200 ml", price: 168.00, code: "140045", image: "" },
      { label: "Nobilis Antique 200 ml", price: 168.00, code: "139803", image: "" },
      { label: "Refil Nobilis Antique 200 ml", price: 168.00, code: "140049", image: "" },
      { label: "Aura Gingi 200 ml", price: 168.00, code: "139804", image: "" },
      { label: "Refil Aura Gingi 200 ml", price: 168.00, code: "140046", image: "" }
    ]
  },
  {
    id: 144, name: "Natura Bothânica Sabonete Líquido para Mãos 230 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Limpeza e frescor, sem ressecar a pele. Refil disponível.",
    image: "", options: [
      { label: "Ficus Herb — verde e frutal", price: 150.00, code: "139241", image: "" },
      { label: "Refil Ficus Herb", price: 98.00, code: "139255", image: "" },
      { label: "Fructus Folium — verde e especiarias", price: 150.00, code: "139240", image: "" },
      { label: "Refil Fructus Folium", price: 98.00, code: "140712", image: "" },
      { label: "Meum Rituale — verde e amadeirado", price: 150.00, code: "166368", image: "" },
      { label: "Refil Meum Rituale", price: 98.00, code: "166364", image: "" }
    ]
  },
  {
    id: 145, name: "Natura Bothânica Hidratante Mãos 230 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "24 horas de hidratação, toque seco e rápida absorção. Refil disponível.",
    image: "", options: [
      { label: "Ficus Herb", price: 180.00, code: "139238", image: "" },
      { label: "Refil Ficus Herb", price: 126.00, code: "139263", image: "" },
      { label: "Fructus Folium", price: 180.00, code: "139239", image: "" },
      { label: "Refil Fructus Folium", price: 126.00, code: "139262", image: "" },
      { label: "Meum Rituale", price: 180.00, code: "166365", image: "" },
      { label: "Refil Meum Rituale", price: 126.00, code: "139265", image: "" }
    ]
  },
  {
    id: 146, name: "Natura Bothânica Creme Hidratante para Mãos 75 g", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Hidratação por até 24 horas com textura leve e toque aveludado.",
    image: "", options: [
      { label: "Ficus Herb", price: 85.00, code: "180377", image: "" },
      { label: "Fructus Folium", price: 85.00, code: "180376", image: "" },
      { label: "Meum Rituale", price: 85.00, code: "180378", image: "" }
    ]
  },
  {
    id: 147, name: "Natura Bothânica Mente Sana — Sabonete e Hidratante Mãos", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Fragrância Herbal e Verde com notas de Menta, Artemísia & Anís. Para mãos que cozinham.",
    image: "", options: [
      { label: "Sabonete Líquido 230 ml", price: 160.00, code: "140711", image: "" },
      { label: "Refil Sabonete 230 ml", price: 98.00, code: "162011", image: "" },
      { label: "Hidratante Mãos 230 ml", price: 180.00, code: "139256", image: "" },
      { label: "Refil Hidratante 230 ml", price: 126.00, code: "162080", image: "" }
    ]
  },
  {
    id: 148, name: "Natura Bothânica Cucumis Acqua — Sabonete e Hidratante Mãos", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Fragrância aromática, aquosa e fresca com notas de Pepino, Alecrim & Mandarina.",
    image: "", options: [
      { label: "Sabonete Líquido 230 ml", price: 160.00, code: "162012", image: "" },
      { label: "Refil Sabonete 230 ml", price: 98.00, code: "162010", image: "" },
      { label: "Refil Sabonete 230 ml (2)", price: 126.00, code: "162077", image: "" },
      { label: "Hidratante Mãos 230 ml", price: 180.00, code: "162079", image: "" }
    ]
  },
  {
    id: 149, name: "Natura Bothânica Óleo Hidratante Corporal Origins 190 ml", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "48 horas de hidratação, no banho ou fora dele. Refil disponível.",
    image: "", options: [
      { label: "190 ml", price: 180.00, code: "139801", image: "" },
      { label: "Refil 190 ml", price: 126.00, code: "140714", image: "" }
    ]
  },
  {
    id: 150, name: "Natura Bothânica Essência Higienizante Delicata Thea", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Limpeza, cuidado e perfumação com ativo neutralizador de odores. Em duas versões.",
    image: "", options: [
      { label: "100 ml", price: 140.00, code: "214710", image: "" },
      { label: "30 ml", price: 70.00, code: "214711", image: "" }
    ]
  },
  {
    id: 151, name: "Natura Bothânica Conjuntos Presente", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Conjuntos Natura Bothânica para presentear.",
    image: "", options: [
      { label: "Conjunto Mente Sana (sabonete + hidratante)", price: 350.00, code: "199375", image: "" },
      { label: "Conjunto Cucumis Acqua (sabonete + hidratante)", price: 350.00, code: "199374", image: "" },
      { label: "Conjunto Creme Hidratante Mãos 3 x 40 g", price: 185.00, code: "185931", image: "" },
      { label: "Conjunto Meum Rituale", price: 340.00, code: "167637", image: "" },
      { label: "Conjunto Fructus Folium", price: 340.00, code: "156786", image: "" },
      { label: "Conjunto Ficus Herb", price: 340.00, code: "157340", image: "" }
    ]
  },
  {
    id: 152, name: "Natura Bothânica Panos de Copa 2 unidades", brand: "Natura", line: "Botânico",
    category: "Casa & Bem-estar", description: "Tecido 100% algodão sustentável, absorvem bem a água e são itens decorativos.",
    image: "", options: [ { label: "2 unidades", price: 90.00, code: "180799", image: "" } ]
  },

];

