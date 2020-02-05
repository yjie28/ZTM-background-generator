var currentColor = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

// display initial color
currentColor.textContent = "Color1 (left): " + color1.value
                            + " Color2 (right): " + color2.value;

function setGradient() {
  body.style.background = "Linear-gradient(to right, "
                        + color1.value
                        + ", "
                        + color2.value
                        + ")";

  // change display to current value of color1 and color2
  currentColor.textContent = "Color1 (left): " + color1.value
                        + " Color2 (right): "  + color2.value;


  // changes the "random" button color to current value of color1
  random.style.background = color1.value;
}

// returns random hex value
function randomHex() {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

// set random value for color1 and color2
function setRandomColor() {
  color1.value = randomHex();
  color2.value = randomHex();

  setGradient();
}

// for the "random" button
random.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
