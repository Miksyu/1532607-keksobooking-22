import {createAds} from './create-ads.js';

const similarAdsTemplate = document.querySelector('#card');

//const popup = document.querySelector('.popup');

const similarAds = createAds;
similarAds.forEach((offer) => {
  const adElement = similarAdsTemplate.cloneNode(true);
  //const card = adElement.querySelector('.popup');
  //const titleTemplate = adElement.querySelector('.popup__type');
  //titleTemplate.textContent = offer.offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.offer.address;
  adElement.querySelector('.popup__text--price').textContent = offer.offer.price;
});

