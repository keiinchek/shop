const products = [
  { id: 1, title: 'Ноутбук 17"',       category: 'Компьютеры', price: 85000 },
  { id: 2, title: 'Монитор 27"',       category: 'Компьютеры', price: 28000 },
  { id: 3, title: 'Клавиатура',        category: 'Аксессуары', price: 6500 },
  { id: 4, title: 'Наушники беспроводные',       category: 'Аксессуары', price: 7600 },
  { id: 5, title: 'Колонка JBL',       category: 'Аксессуары', price: 15000 },
  { id: 6, title: 'Коврик для мыши',        category: 'Аксессуары', price: 500 },
  { id: 7, title: 'Мышь беспроводная', category: 'Аксессуары', price: 2500 },
  { id: 8, title: 'Web-камера',        category: 'Аксессуары', price: 10500},
  { id: 9, title: 'Микрофон FIFI LIPTON', category: 'Аксессуары', price: 7250 }
];
const cart = [];

const catalog = document.getElementById('catalog');
const cartCount = document.getElementById('cart-count');
const cartSum = document.getElementById('cart-sum');
const clearCartBtn = document.getElementById('clear-cart');

function renderProducts() {
  catalog.innerHTML = products.map(p => `
    <div class="card">
      <div class="category">${p.category}</div>
      <h3>${p.title}</h3>
      <div class="price">${Number(p.price).toLocaleString('ru-RU')} ₽</div>
      <button data-id="${p.id}">В корзину</button>
    </div>
  `).join('');
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartSum.textContent = cart
    .reduce((sum, p) => sum + Number(p.price), 0)
    .toLocaleString('ru-RU');
}

catalog.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  const product = products.find(p => p.id === Number(e.target.dataset.id));
  cart.push(product);
  renderCart();
  console.log ('В корзину добавлен: ${product.title}');
});
clearCartBtn.addEventListener('click', () => {
  cart.length = 0;
  renderCart();
  console.clear();
  console.log('Корзина очищена');
});

renderProducts();
renderCart();