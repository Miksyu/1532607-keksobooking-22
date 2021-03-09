import {createAds} from './create-ads.js';

const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAds = createAds.slice(0, 1);
const mapCanvas = document.querySelector('.map__canvas');
const similarListFragment = document.createDocumentFragment();
similarAds.forEach((offer) => {
  const adElement = similarAdsTemplate.cloneNode(true);
  if(offer.offer.title){
    adElement.querySelector('.popup__title').textContent = offer.offer.title;
  } else{
    adElement.querySelector('.popup__title').remove();
  }
  if(offer.offer.address){
    adElement.querySelector('.popup__text--address').textContent = `${offer.offer.address.x} ${offer.offer.address.y}`;
  } else{
    adElement.querySelector('.popup__text--address').remove();
  }
  if(offer.offer.price){
    adElement.querySelector('.popup__text--price').textContent = `${offer.offer.price} ₽/ночь`;
  } else{
    adElement.querySelector('.popup__text--price').remove();
  }
  if(offer.offer.rooms && offer.offer.guests){
    adElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей.`;
  } else{
    adElement.querySelector('.popup__text--capacity').remove();
  }
  if(offer.offer.checkin && offer.offer.checkout){
    adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin} выезд до ${offer.offer.checkout}`;
  } else{
    adElement.querySelector('.popup__text--time').remove();
  }
  if(offer.offer.description){
    adElement.querySelector('.popup__description').textContent = offer.offer.description;
  } else{
    adElement.querySelector('.popup__description').remove();
  }
  if(offer.author.avatar){
    adElement.querySelector('.popup__avatar').src = offer.author.avatar;
  } else{
    adElement.querySelector('.popup__avatar').remove();
  }
  if(offer.offer.photos){
    const photosHousing = adElement.querySelector('.popup__photos')
    const photosArray = photosHousing.textContent = offer.offer.photos;
    photosHousing.innerHTML = photosArray.map(function(photo){
      return `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    })
  } else{
    adElement.querySelector('.popup__photos').remove();
  }

  if(offer.offer.features){
    const featuresList = adElement.querySelector('.popup__features');
    const featuresItems = featuresList.textContent = offer.offer.features;
    featuresList.innerHTML = featuresItems.map(function (featuresItem){
      return `<li class='popup__feature popup__feature--${featuresItem}'> ${featuresItem} </li>`;
    }).join('');
  } else{
    adElement.querySelector('.popup__features').remove();
  }

  function getTypeOffer(type){
    switch(type){
      case 'flat':
        return 'Квартира';
      case 'palace':
        return 'Дворец'
      case 'bungalow':
        return 'Бунгало';
      case 'house':
        return 'Дом';
    }
  }
  if(offer.offer.type){
    const typeOffer = offer.offer.type;
    const typeTranslation = getTypeOffer(typeOffer);
    const typePopup = adElement.querySelector('.popup__type');
    typePopup.textContent = typeTranslation;
  }else{
    adElement.querySelector('.popup__type').remove();
  }

  similarListFragment.appendChild(adElement)
});

mapCanvas.appendChild(similarListFragment);
