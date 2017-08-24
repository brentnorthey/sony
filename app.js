import View from './view';
import Controller from './controller';
import Item from './item';
import {qs, $on, processData} from './helpers';

require("./style.css");

/* Initialize after DOM is ready */
let init = function () {

  let view = new View('View Name');
  let controller = new Controller ('Controller Name', view);

  controller.setStream(document.data);

  console.log(controller.getStream());

  console.log(controller.showName());
  console.log(view.getTotalCount().innerHTML);

  // let myItem = new Item('nagme', 'Stream1', 'Name1', 'Viewers1', 'desc3');
  // let myItem1 = new Item('nagmedd', 'Strddeam1', 'Nadme1', 'Viewers1', 'desc4');
  // let myItem2 = new Item('nagme2', 'Stream1', 'Name1', 'Viewers1', 'desc15');
  // let myItem3 = new Item('nagme3', 'Stream1', 'Name1', 'Viewers1', 'desc16');
  // let myItem4 = new Item('nagme4', 'Stream1', 'Name1', 'Viewers1', 'desc1');
  // let myItem5 = new Item('nagme5', 'Stream1', 'Name1', 'Viewers1', 'desc1');
  //
  // qs('.container__item').innerHTML += myItem1._renderItem();
  // qs('.container__item').innerHTML += myItem2._renderItem();
  // qs('.container__item').innerHTML += myItem3._renderItem();
  // qs('.container__item').innerHTML += myItem4._renderItem();
  // qs('.container__item').innerHTML += myItem5._renderItem();






};


$on(window, 'load', init);
