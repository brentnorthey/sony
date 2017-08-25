import View from './view';
import Controller from './controller';
import {$on} from './helpers';

require("./style.css");

/* Initialize after DOM is ready */
let init = function () {
  let view = new View('View');
  let controller = new Controller ('Controller', view);
};

$on(window, 'load', init);
