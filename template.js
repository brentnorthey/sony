import {escapeForHTML} from './helpers';
export default class Template {
  /**
   * Format the contents of a stream list.
   *
   * @param {ItemList} items Object containing keys you want to find in the template to replace.
   * @returns {!string} Contents for a
   *
   * @example
   * view.show({
	 *	id: 1,
	 *	title: "Hello World",
	 *	completed: false,
	 * })
   */
  itemList(items) {
    return items.reduce((a, item) => a + `
<li data-id="${item.id}"${item.completed ? ' class="completed"' : ''}>
	<input class="toggle" type="checkbox" ${item.completed ? 'checked' : ''}>
	<label>${escapeForHTML(item.title)}</label>
	<button class="destroy"></button>
</li>`, '');

  }

  renderItem() {
    let noPreview = '<svg height="10rem" viewBox="0 0 515 332"\n' +
      '                 version="1.1" xmlns="http://www.w3.org/2000/svg"\n' +
      '                 xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
      '                <g id="Page-1" stroke="none" stroke-width="1" fill="none"\n' +
      '                   fill-rule="evenodd">\n' +
      '                    <circle id="Oval" stroke="#979797" fill="#E28622" cx="267"\n' +
      '                            cy="185" r="75"></circle>\n' +
      '                    <rect id="Rectangle" stroke="#979797" stroke-width="35"\n' +
      '                          x="17.5" y="17.5" width="479" height="297"></rect>\n' +
      '                    <polygon id="Triangle-2" stroke="#979797" fill="#D8D8D8"\n' +
      '                             points="181.5 95 309 275 54 275"></polygon>\n' +
      '                    <polygon id="Triangle-2" stroke="#979797" fill="#D8D8D8"\n' +
      '                             points="266.5 156 351 275 182 275"></polygon>\n' +
      '                    <polygon id="Triangle-2" stroke="#979797" fill="#D8D8D8"\n' +
      '                             points="359 131 461 275 257 275"></polygon>\n' +
      '                </g>\n' +
      '            </svg>';

    let output = `<div class="item item--simple">
          <div class="item__preview">${noPreview}</div>
          <div class="container">
          <div class="item__stream">${this._getStream()}</div>
          <div class="item__name"> ${this._getName()}</div>
          <div class="item__viewers"> ${this._getViewers()}</div>
          <div class="item__desc">${this._getDesc()}</div>
          </div>
          </div>
          </div>`;

    return output;
  }

  /**
   * Format the contents of an "items left" indicator.
   *
   * @param {number} activeTodos Number of active todos
   *
   * @returns {!string} Contents for an "items left" indicator
   */
  itemCounter(activeTodos) {
    return `${activeTodos} item${activeTodos !== 1 ? 's' : ''} left`;
  }
}