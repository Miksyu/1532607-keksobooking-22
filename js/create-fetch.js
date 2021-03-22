import {renderSimilarList} from './map.js'

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    renderSimilarList(ads)
    //console.log(ads)
  });
