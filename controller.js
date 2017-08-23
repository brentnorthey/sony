import {$on} from './helpers';
import {qs} from './helpers';

module.exports = class Controller {

  constructor (name) {
    this.name = name;
  }

  _showName() {
    return this.name;
  }

}