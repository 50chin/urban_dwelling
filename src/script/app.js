import { productData } from '../public/products.js';

const productWrapperNode = document.querySelector('.product__wrapper');

// Функция для создания карточек
const createProductCard = ({ id, img, name, price, oldPrice }) => {
  const productCard = document.createElement('article');
  productCard.className = 'product-card';
  productCard.id = id;
  productCard.innerHTML = `
  <div class="product-card__img-block">
  <img src="${img[0]}" alt="${name}" class="product-card__img" srcset=${img[0]} 1x, ${img[1]} 2x />
  <div class="product-card__btn-block">
  <button class="product-card__btn">Подробнее</button>
  </div>
  </div>  
  <h3 class="product-card__name">${name}</h3>`;

  const priceElement = document.createElement('p');

  if (oldPrice) {
    priceElement.className = 'product-card__price--orange price';
    priceElement.innerHTML = `${price} ₽ <span class="product-card__price--gray">${oldPrice} ₽</span>`;
    const infoElement = document.createElement('p');
    infoElement.className = 'product-card__info';
    infoElement.innerHTML = `Акция`;
    productCard.appendChild(infoElement);
  } else {
    priceElement.className = 'product-card__price price';
    priceElement.innerHTML = `${price} ₽`;
  }
  productCard.appendChild(priceElement);

  return productCard;
};

// Функция для рендера карточек
const renderProductCards = (product) => {
  productWrapperNode.innerHTML = '';
  product.forEach((product) => {
    const createCard = createProductCard(product);
    productWrapperNode.append(createCard);
  });
};

renderProductCards(productData);
