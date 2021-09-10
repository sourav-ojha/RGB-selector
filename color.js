let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let opacity = document.getElementById("opacity");
let para = document.querySelector(".parameters");
let cont = document.querySelector(".container");
let generator = document.getElementById("generator");
let output = document.getElementById("output");
let outputr = document.getElementById("outputr");
let outputg = document.getElementById("outputg");
let outputb = document.getElementById("outputb");
let outputo = document.getElementById("outputo");
let r = 100,
  g = 100,
  b = 100,
  o = 1,
  rgb;

const changeBg = (rgb) => {
  cont.style.backgroundColor = `${rgb}`;
  output.value = rgb;
};

red.oninput = () => {
  r = red.value;
  outputr.value = r;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};
green.oninput = () => {
  g = green.value;
  outputg.value = g;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};
blue.oninput = () => {
  b = blue.value;
  outputb.value = b;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};
opacity.oninput = () => {
  o = opacity.value;
  outputo.value = o;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};

outputr.oninput = () => {
  r = outputr.value;
  red.value = r;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};
outputg.oninput = () => {
  g = outputg.value;
  green.value = g;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};
outputb.oninput = () => {
  b = outputb.value;
  blue.value = b;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};
outputo.oninput = () => {
  o = outputo.value;
  opacity.value = o;
  rgb = `rgba(${r},${g},${b},${o})`;
  changeBg(rgb);
};

const generateRandom = () => {
  r = Math.floor(Math.random() * 254);
  g = Math.floor(Math.random() * 254);
  b = Math.floor(Math.random() * 254);

  red.value = r;
  blue.value = b;
  green.value = g;

  outputr.value = r;
  outputg.value = g;
  outputb.value = b;

  rgb = `rgba(${r},${g},${b},${o})`;
  // console.log(r, g, b);
  changeBg(rgb);
};

// Random geneartor
generator.addEventListener("click", generateRandom);
