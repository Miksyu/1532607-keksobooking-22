function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  let er = ('Введите положительные числа, включая 0');
  return er;
}

const getRandomFloat = (min, max, numbersCountAfterDot) => {
  if (min >= 0 && max >= 0){
    const random = Math.random()* (max - min) + min;
    return random.toFixed(numbersCountAfterDot);
  }
  let er = ('Введите положительные числа, включая 0');
  return er;
}
getRandomIntInclusive(-4, 10);
getRandomFloat(2, 10, 4);
