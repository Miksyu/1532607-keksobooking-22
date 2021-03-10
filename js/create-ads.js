import {createArr, getRandomInt, getRandomFloat, getMainZero, getStringFromArray} from './util.js';

const TITLE = [
  'Spend free time',
  'Go off monotony',
  'Find happiness',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'spacious',
  'clear',
  'high-ceilinged',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const DESCRIPTION_SIMILAR_AD_COUNT = 10;

const rechangeNumber = () => {
  return `img/avatars/user${getMainZero(1, 8, 2)}.png`;
}

const describeAuthor = () => {
  return{
    avatar: rechangeNumber(),
  }
}

const offerInformation = () => {
  return{
    title: getStringFromArray(TITLE),
    address: getLocation(),
    price: getRandomInt(1000, 75000),
    type: getStringFromArray(TYPE),
    rooms: getRandomInt(1, 5),
    guests: getRandomInt(1, 20),
    checkin: getStringFromArray(CHECKIN),
    checkout: getStringFromArray(CHECKOUT),
    features: createArr(FEATURES, FEATURES.length - 1),
    description: getStringFromArray(DESCRIPTION),
    photos: createArr(PHOTOS, PHOTOS.length - 1),
  }
}

const getLocation = () => {
  return{
    x: getRandomFloat(35.65, 35.7, 5),
    y: getRandomFloat(139.7, 139.8, 5),
  };
};

const createAD = () => {
  return{
    author: describeAuthor(),
    offer: offerInformation(),
    location: getLocation(),
  }
}

const createAds = new Array(DESCRIPTION_SIMILAR_AD_COUNT).fill(null).map(() =>
  createAD());

export{createAds};
