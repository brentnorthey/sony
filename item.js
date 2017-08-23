/* Item Class */
module.exports = class Item {

  constructor(name, preview, stream, viewers, desc)
  {
    this.name = name;
    this.preview = preview;
    this.stream = stream;
    this.viewers = viewers;
    this.desc = desc;
  }

  _getItemList() {
    return this.itemList;
  }

  _setItemList() {
    return this.itemList;
  }

  _getPreview() {
    return this.preview;
  }

  _setPreview(preview) {
    this.preview = preview;
  }

  _setName(name)
  {
    this.name = name;
  }

  _getName()
  {
    return this.name;
  }

  _setStream(stream)
  {
    this.stream = stream;
  }

  _getStream()
  {
    return this.stream;
  }

  _setViewers(viewers)
  {
    this.viewers = viewers;
  }

  _getViewers()
  {
    return this.viewers;
  }

  _setDesc(desc)
  {
    this.desc = desc;
  }

  _getDesc()
  {
    return this.desc;
  }

  _renderItem()
  {
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
}



