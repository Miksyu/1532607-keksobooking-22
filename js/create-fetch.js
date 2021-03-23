import {createMapPoint} from './map.js'

export{getOffers}

async function getOffers(){
  const data = await fetch('https://22.javascript.pages.academy/keksobooking/data')
  const offers = await data.json()
  return offers
}

async function getOffersData(){
  const dataOfOffers = await getOffersData()
  await createMapPoint(dataOfOffers)
}
getOffersData();

