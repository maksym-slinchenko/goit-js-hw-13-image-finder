import "./css/styles.css";
import parsPicturesList from "./temlates/pictures";
import getPicturesList from "./js/api-service";

// блиотеки
const debounce = require("lodash.debounce");
// Переменные
const KEY = "19420354-3227e9c850ee70e183cd8e591";
const URL = "https://pixabay.com/api/";
let pageNumber = 1;
const quantityPerPage = 12;
//DOM-элементы
const searchEl = document.querySelector("#search-input");
const galleryEl = document.querySelector("#gallery");
const buttonContainerEl = document.querySelector("#button-container");
const buttomEl = buttonContainerEl.querySelector("#button");

// Вызов фукции поиска картинок по значению инпута
searchEl.addEventListener(
  "input",
  debounce((e) => {
    cleanPicturesList(galleryEl);
    if (searchEl.value !== "") {
      getPicturesList(URL, KEY, searchEl, pageNumber, quantityPerPage).then(
        (r) => {
          putPicturesIntoHTML(galleryEl, parsPicturesList, r);
        }
      );
    }
  }, 500)
);

//  Функция добавления списка картинок в HTML
function putPicturesIntoHTML(el, templateFunction, r) {
  el.insertAdjacentHTML("beforeend", templateFunction(r.hits));
}

// Функция очистки HTML для каждой итерации
function cleanPicturesList(el) {
  el.innerHTML = "";
}
// Функция загрузки доп. картинок
function loadMorePictures() {
  pageNumber += 1;
  getPicturesList(URL, KEY, searchEl, pageNumber, quantityPerPage).then((r) => {
    putPicturesIntoHTML(galleryEl, parsPicturesList, r);
    console.log(pageNumber);
  });
}
// Функция добавления новых картинок на страницу
buttomEl.addEventListener("click", () => {
  if (searchEl.value !== "") {
    loadMorePictures();
  }
});

// Предотвращаем перезагрузку страницы
searchEl.addEventListener("keydown", turnOffEnterDefaultEvent);
function turnOffEnterDefaultEvent(e) {
  if (event.key === "Enter") {
    e.preventDefault();
  }
}
