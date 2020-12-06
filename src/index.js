import "./css/styles.css";
import parsPicturesList from "./temlates/pictures";

// Зарегистрироваться на REST API и получить ключ +
// Функция для загрузки REST API по данным в инпуте +
// Подготовить шаблон
// Функция для парса шаблона
// Кнопка для "Загрузить еще"
// функция для автоматического скрола при загрузке следующей партии картинок

// Библиотеки

// Переменные
const KEY = "19420354-3227e9c850ee70e183cd8e591";
const URL = "https://pixabay.com/api/";
const pageNumber = 1;
const quantityPerPage = 4;
const searchTerm = document.querySelector("#search-form").value;
//DOM-элементы
const galleryEl = document.querySelector("#gallery");
// Вызов фукции

// Функция

fetch(
  `${URL}?key=${KEY}&image_type=photo&orientation=horizontal&q=${searchTerm}&page=${pageNumber}&per_page=${quantityPerPage}`
);

console.log(`${URL}?key=${KEY}&q=${searchTerm}&per_page=${quantityPerPage}`);

function cleanPicturesList(el) {
  el.innerHTML = "";
}

function getPicturesList() {
  fetch(
    `${URL}?key=${KEY}&q=${searchTerm}&per_page=${quantityPerPage}`
  ).then((r) => console.log(r.json()));
  // .then((r) => {
  //   console.log(parsPicturesList(r));
  //   cleanPicturesList(el), putPicturesIntoHTML(el, templateFunction, r);
  // });
  // .catch(
  //   cleanCountriesList(countriesListEl),
  //   cleanCountriesList(countryContainerEl)
  // );
}

getPicturesList();

function putPicturesIntoHTML(el, templateFunction, r) {
  el.insertAdjacentHTML("beforeend", templateFunction(r));
}
console.log(getPicturesList(galleryEl, parsPicturesList));
console.log(
  fetch(`${URL}?key=${KEY}&q=${searchTerm}&per_page=${quantityPerPage}`)
);
