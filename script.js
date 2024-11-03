const show = document.querySelector(".show");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 255);

  let g = Math.floor(Math.random() * 255);

  let b = Math.floor(Math.random() * 255);

  let rgb = `rgb(${r}, ${g}, ${b} )`;
  body.style.backgroundColor = rgb;
  show.textContent = rgb;
});
