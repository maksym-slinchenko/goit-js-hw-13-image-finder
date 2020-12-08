function getPicturesList(URL, KEY, searchEl, pageNumber, quantityPerPage) {
  return fetch(
    `${URL}?key=${KEY}&q=${searchEl.value}&page=${pageNumber}&per_page=${quantityPerPage}`
  ).then((r) => r.json());
}

export default getPicturesList;
