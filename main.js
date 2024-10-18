let sites = document.querySelector(".strony");
let fotFirst = document.querySelector(".autorzy");
let fotSecond = document.querySelector(".margota");

let fotThird = document.querySelector(".spoko");
let txt = document.querySelector(".strony-txt");

let margo = document.querySelector(".strony-margota");
let spx = document.querySelector(".strony-spoko");
let aut = document.querySelector(".strony-autorzy");

fotSecond.addEventListener("click", function () {
  margo.classList.add("active");
  txt.classList.remove("active");
  spx.classList.remove("active");
  aut.classList.remove("active");
});
fotFirst.addEventListener("click", function () {
  aut.classList.add("active");
  txt.classList.remove("active");
  margo.classList.remove("active");
  spx.classList.remove("active");
});
fotThird.addEventListener("click", function () {
  spx.classList.add("active");
  aut.classList.remove("active");
  txt.classList.remove("active");
  margo.classList.remove("active");
});
