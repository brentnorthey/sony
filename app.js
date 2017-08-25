import View from './view';
import Controller from './controller';
import {qs, $on} from './helpers';

require("./style.css");

/* Initialize after DOM is ready */
let init = function () {

  console.log('herheeh');
  console.log(document.data);

  let view = new View('View Name');
  let controller = new Controller ('Controller Name', view);



};

$on(window, 'load', init);
