import {qs, $on, $delegate} from './helpers';
import Template from './template';

export default class View {

  constructor(name) {
    this.name = name;
    this.formInput = qs('.form__input');
    this.formSubmit = qs('.form__submit');
    this.totalCount = qs('.total__count');
    this.countPrev = qs('.count__prev');
    this.countIndex = qs('.count__index');
    this.countLength = qs('.count__length');
    this.countNext = qs('.count__next');
    this.containerItem = qs('.container__item');

    // $on(this.containerItem, 'click', () => {
    //   console.log(document.data.streams[0]);
    // });
  }



  bindPrev(handler) {
    $on(this.countPrev, 'click', () => {
      handler();
    });
  }

  bindNext(handler) {
    $on(this.countNext, 'click', () => {
      handler();
    });
  }

  getFormInput() {
    return this.formInput;
  }

  bindSubmit(handler) {
    $on(this.formSubmit, 'click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  getTotalCount() {
    return this.totalCount;
  }

  setCountIndex(index) {
    this.countIndex.innerHTML = index;
  }

  setCountLength(length) {
    this.countLength.innerHTML = length;
  }

  setTotalCount(count) {
    this.totalCount.innerHTML = count;
  }

  renderStream(item) {
    this.containerItem.innerHTML += item.renderItem();
  }

  clearItems() {
    this.containerItem.innerHTML = '';
  }
}