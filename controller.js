import Template from './template';
import {qs, $fetchJSONP, processData } from './helpers';

import Controller from './controller';
import Item from './item';
import View from './view';

export default class Controller {

  constructor(name, view) {
    this.client_id ='xzsmhnyi8grqdveqjez2sog16fhcoj';
    this.currentStream;
    this.name = name;
    this.view = view;

    view.bindPrev(this.prev.bind(this));
    view.bindNext(this.next.bind(this));
    view.bindSubmit(this.submit.bind(this));

  }

  _getClientId() {
    return this.client_id;
  }

  getStream(query,processData) {
    let request_url = 'https://api.twitch.tv/kraken/search/streams?q=' + query + '&callback=processData&client_id=' + this._getClientId();
    $fetchJSONP(request_url);

  }

  showName() {
    return this.name;
  }

  prev() {
      this.view.prev();
  }

  next() {
    this.view.next();
  }

  submit() {
    this.getStream(this.view.getFormInput().value);
  }
}
