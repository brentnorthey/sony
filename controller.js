import {qs, $fetchJSONP} from './helpers';
import Item from './item';

export default class Controller {
  constructor(name, view) {
    this.client_id = 'xzsmhnyi8grqdveqjez2sog16fhcoj';
    this.currentStream = null;
    this.offset = 10;
    this.currentIndex = 1;
    this.currentLength =  0;
    this.name = name;
    this.view = view;
    view.bindPrev(this.prev.bind(this));
    view.bindNext(this.next.bind(this));
    view.bindSubmit(this.submit.bind(this));
  }

  _getClientId() {
    return this.client_id;
  }

  getStream() {
    return this.currentStream;
  }

  setStream(query) {
    let request_url = 'https://api.twitch.tv/kraken/search/streams?q=' + query + '&offset=' + this.getOffset() + '&callback=processData&client_id=' + this._getClientId();
    $fetchJSONP(request_url);
    this.updateData();
  }

  showName() {
    return this.name;
  }

  prev() {
    let stream = this.getStream();
    if (this.getCurrentIndex() == 1 || !stream)
      return;
    let request_url = stream._links.prev + '&callback=processData&client_id=' + this._getClientId();
    $fetchJSONP(request_url);
    this.updateData();
    this.updateCurrentIndex(-1);
    this.view.setCountIndex(this.currentIndex);
    this.renderStream();
  }

  next() {
    let stream = this.getStream();

    if (this.getCurrentIndex() >= this.getCurrentLength() || !stream)
      return;

    let request_url = stream._links.next + '&callback=processData&client_id=' + this._getClientId();
    $fetchJSONP(request_url);

    this.updateData();

    this.updateCurrentIndex(1);
    this.view.setCountIndex(this.getCurrentIndex());
  }

  setTotalCount() {
    let stream = this.getStream();
    this.view.setTotalCount(stream._total);
  }

  setCountIndex() {
    this.view.setCountIndex(this.currentIndex);
  }

  setCountLength() {
      this.view.setCountLength(this.getCurrentLength());
  }

  getCurrentLength(){
    return this.currentLength;
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getOffset() {
    return this.offset;
  }

  updateCurrentIndex(val) {
    this.currentIndex = this.currentIndex + val;
  }

  setCurrentIndex(val) {
    this.currentIndex = val;
  }

  setCurrentLength(){
    let stream = this.getStream();
    if (stream)
      this.currentLength = Math.ceil(stream._total / this.offset);
  }

  renderStream() {
    this.view.clearItems();
    this.getStream().streams.forEach((element) => {
      this.view.renderStream(new Item(element.game, element.preview.medium, element.game, element.viewers, element.channel.status));
    });
  }

  updateData() {
    setTimeout(() => {
      this.currentStream = document.data;
      this.setCurrentLength();
      this.setCountLength();
      this.setCountIndex();
      this.setTotalCount();
      this.renderStream();
    }, 1000);
  }

  submit() {
    this.setCurrentIndex(1);
    this.setStream(this.view.getFormInput().value, 10);
  }
}