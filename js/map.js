/* global L:readonly */
import {getLocation} from './create-ads.js'
//import { similarAds } from './popup.js';
const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

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

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

const points = `${getLocation.x}, ${getLocation.y}`;

points.forEach(({x, y}) => {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      x,
      y,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    //.bindPopup(title);
});
