/* global L:readonly */
//import {createAds} from './create-ads.js'
//import {similarAds} from './popup.js';
import './create-fetch.js'

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const adFrom = document.querySelector('.ad-form');
adFrom.classList.add('ad-form--disabled');
adFrom.setAttribute('disabled', 'disabled');
const mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');
mapFilters.setAttribute('disabled', 'disabled');

document.addEventListener('click' , activeCondition);

function activeCondition(){
  adFrom.classList.remove('ad-form--disabled');
  adFrom.removeAttribute('disabled', 'disabled');
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.removeAttribute('disabled', 'disabled');
}
let addressObject = null;


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [0, 0],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const foundForm = document.querySelector('.ad-form__element #address');
foundForm.value = `${35.68950} ${139.69171}`;

mainPinMarker.on('moveend', (evt) => {
  addressObject = evt.target.getLatLng();
  foundForm.value = `${(addressObject.lat).toFixed([5])} ${(addressObject.lng).toFixed([5])}`;
  return addressObject;
});
//console.log(adressObject);

//const similarListFragment = document.createDocumentFragment();



const renderSimilarList = (similarAds) => {
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = popupTemplate.cloneNode(true);

  if(similarAds.offer.title){
    popupElement.querySelector('.popup__title').textContent = similarAds.offer.title;
  } else{
    popupElement.querySelector('.popup__title').remove();
  }
  if(similarAds.offer.address){
    popupElement.querySelector('.popup__text--address').textContent = `${similarAds.offer.address.x} ${similarAds.offer.address.y}`;
  } else{
    popupElement.querySelector('.popup__text--address').remove();
  }
  if(similarAds.offer.price){
    popupElement.querySelector('.popup__text--price').textContent = `${similarAds.offer.price} ₽/ночь`;
  } else{
    popupElement.querySelector('.popup__text--price').remove();
  }
  if(similarAds.offer.rooms && similarAds.offer.guests){
    popupElement.querySelector('.popup__text--capacity').textContent = `${similarAds.offer.rooms} комнаты для ${similarAds.offer.guests} гостей.`;
  } else{
    popupElement.querySelector('.popup__text--capacity').remove();
  }
  if(similarAds.offer.checkin && similarAds.offer.checkout){
    popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${similarAds.offer.checkin} выезд до ${similarAds.offer.checkout}`;
  } else{
    popupElement.querySelector('.popup__text--time').remove();
  }
  if(similarAds.offer.description){
    popupElement.querySelector('.popup__description').textContent = similarAds.offer.description;
  } else{
    popupElement.querySelector('.popup__description').remove();
  }
  if(similarAds.author.avatar){
    popupElement.querySelector('.popup__avatar').src = similarAds.author.avatar;
  } else{
    popupElement.querySelector('.popup__avatar').remove();
  }
  if(similarAds.offer.photos){
    const photosHousing = popupElement.querySelector('.popup__photos')
    const photosArray = photosHousing.textContent = similarAds.offer.photos;
    photosHousing.innerHTML = photosArray.map(function(photo){
      return `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    })
  } else{
    popupElement.querySelector('.popup__photos').remove();
  }

  if(similarAds.offer.features){
    const featuresList = popupElement.querySelector('.popup__features');
    const featuresItems = featuresList.textContent = similarAds.offer.features;
    featuresList.innerHTML = featuresItems.map(function (featuresItem){
      return `<li class='popup__feature popup__feature--${featuresItem}'> ${featuresItem} </li>`;
    }).join('');
  } else{
    popupElement.querySelector('.popup__features').remove();
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
  if(similarAds.offer.type){
    const typeOffer = similarAds.offer.type;
    const typeTranslation = getTypeOffer(typeOffer);
    const typePopup = popupElement.querySelector('.popup__type');
    typePopup.textContent = typeTranslation;
  }else{
    popupElement.querySelector('.popup__type').remove();
  }
  //similarListFragment.appendChild(popupElement)
  return popupElement;
}

function createMapPoint(data){
  data.forEach((el) => {
    const lat = el.offer.address.x;
    const lng = el.offer.address.y;

    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(
        renderSimilarList(data),
        {
          keepInView: true,
        },
      );
  })
}

export{createMapPoint}
