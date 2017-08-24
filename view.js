import {qs, $on, $delegate} from './helpers';
import Template from './template';

export default class View {

  constructor (name) {
    this.name = name;
    this.formInput =  qs('.form__input');
    this.formSubmit =  qs('.form__submit');
    this.totalCount =  qs('.total__count');
    this.countPrev =  qs('.count__prev');
    this.countIndex =  qs('.count__index');
    this.countLength =  qs('.count__length');
    this.countNext =  qs('.count__next');
    this.containerItem =  qs('.container__item');
  }

  bindPrev(handler) {
    $on(this.countPrev, 'click', () => {
        handler();
    });
  }

  prev() {
   console.log(this.countLength);
  }

  bindNext(handler) {
    $on(this.countNext, 'click', () => {
      handler();
    });
  }

  next() {
    console.log('next');
  }

  getFormInput(){
    return this.formInput;
  }

  bindSubmit(handler) {
    $on(this.formSubmit, 'click', (e) => {
      e.preventDefault();
      handler();
    });
  }

  submit(){
    console.log(this.formInput.value);
  }

  _getTotalCount() {
    return this.totalCount;
  }

}