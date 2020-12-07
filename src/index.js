import "./css/styles.css";
import parsPicturesList from "./temlates/pictures";

// Библиотеки
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
// Вызов фукции поиска катинок по значению инпута
searchEl.addEventListener(
  "input",
  debounce(() => {
    cleanPicturesList(galleryEl);
    if (searchEl.value !== "") {
      addPicturesList(galleryEl, parsPicturesList);
    }
  }, 500)
);
// Функция запроса на API и рендеринга страницы

function addPicturesList(el, templateFunction) {
  fetch(
    `${URL}?key=${KEY}&q=${searchEl.value}&page=${pageNumber}&per_page=${quantityPerPage}`
  )
    .then((r) => r.json())
    .then((r) => {
      putPicturesIntoHTML(el, templateFunction, r);
    });
}

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
  addPicturesList(galleryEl, parsPicturesList);
}
// Функция добавления новых картинок на страницу
buttomEl.addEventListener("click", () => {
  if (searchEl.value !== "") {
    loadMorePictures();
  }
});
