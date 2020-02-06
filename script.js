let currentColor = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let random = document.getElementById('random'); // "random" button

// display initial color - which are orange (#ff9500) and white (#ffffff)
currentColor.textContent =
  'Color1 (left): ' + color1.value + ' Color2 (right): ' + color2.value;

const setGradient = () => {
  body.style.background =
    'Linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  // change display to current value of color1 and color2
  currentColor.textContent =
    'Color1 (left): ' + color1.value + ' Color2 (right): ' + color2.value;

  // changes the "random" button color to current value of color1
  random.style.background = color1.value;
};

// returns random hex value
const randomHex = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16);

// set random value for color1 and color2
const setRandomColor = () => {
  color1.value = randomHex();
  color2.value = randomHex();

  setGradient();
};

// for the "random" button
random.addEventListener('click', setRandomColor);

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
