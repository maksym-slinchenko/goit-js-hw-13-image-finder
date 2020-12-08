class PictureList {
  constructor(URL, KEY, searchEl, pageNumber, quantityPerPage) {
    this.URL = URL;
    this.KEY = KEY;
    this.searchEl = searchEl;
    this.pageNumber = pageNumber;
    this.quantityPerPage = quantityPerPage;
  }

  getPicturesList() {
    return fetch(
      `${this.URL}?key=${this.KEY}&q=${this.searchEl.value}&page=${this.pageNumber}&per_page=${this.quantityPerPage}`
    ).then((r) => r.json());
  }
}
export default PictureList;
