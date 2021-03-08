const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]);

function getStringFromArray(array){
  const countOfIndex = getRandomInt(0, array.length - 1);
  const someString = array[countOfIndex];
  return someString;
}

function getRandomInt(min, max) {
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

function getMainZero(min, max, width) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomize = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber = randomize + '';
  return randomNumber.length >= width ? randomNumber : new Array(width - randomNumber.length + 1).join(0) + randomNumber;
}

export {createArr, getRandomInt, getRandomFloat, getMainZero, getStringFromArray};
