import {createAds} from './create-ads.js';

const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAds = createAds;
debugger

const typeId = document.getElementById('type')
similarAds.forEach((offer) => {
  const adElement = similarAdsTemplate.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  adElement.querySelector('.popup__text--price').textContent = offer.offer.price, '₽/ночь';
  adElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms, ' комнаты для ', offer.offer.guests, ' гостей.';
  adElement.querySelector('.popup__text--time').textContent = 'Заезд после ', offer.offer.checkin, ', выезд до ', offer.offer.checkout;
  adElement.querySelector('.popup__description').textContent = offer.offer.description;
  adElement.querySelector('.popup__photos').textContent = offer.offer.photos;
  adElement.querySelector('.popup__avatar').src = offer.author.avatar;

  const featuresList = adElement.querySelector('.popup__features');
  const featuresItems = featuresList.textContent = offer.offer.features;
  featuresList.innerHTML = featuresItems.map(function (featuresItem){
    return `<li class='popup__feature popup__feature--${featuresItem}'> ${featuresItem} </li>`;
  }).join('');

  const typeTranslation = switch(offer.offer.type){
    case 'flat':
      return 'Квартира';
      break;
    case 'palace':
      return 'Дворец';
      break;
    case 'bungalow':
      return 'Бунгало';
      break;
    case 'house':
      return 'Дом';
      break;
  }
  const typePopup = adElement.querySelector('.popup__type').textContent = offer.offer.type;


  const typeOptions = typeId.cloneNode(true);
  typeOptions.innerHTML = typePopup.map(function() {
    return this.element;
  }).get().join();
});
