/* Item Class */
export default class Item {
  constructor(name, preview, stream, viewers, desc)
  {
    this.name = name;
    this.preview = preview;
    this.stream = stream;
    this.viewers = viewers;
    this.desc = desc;
  }

  getPreview() {
    return this.preview;
  }

  setPreview(preview) {
    this.preview = preview;
  }

  setName(name)
  {
    this.name = name;
  }

  getName()
  {
    return this.name;
  }

  setStream(stream)
  {
    this.stream = stream;
  }

  getStream()
  {
    return this.stream;
  }

  setViewers(viewers)
  {
    this.viewers = viewers;
  }

  getViewers()
  {
    return this.viewers;
  }

  setDesc(desc)
  {
    this.desc = desc;
  }

  getDesc()
  {
    return this.desc;
  }

  renderItem()
  {
    let output = `<div class="item item--simple">
          <div class="item__preview"><image class="item__preview" src="${this.getPreview()}"/></div>
          <div class="container">
          <div class="item__stream">${this.getStream()}</div>
          <div class="item__name"> ${this.getName()}</div>
          <div class="item__viewers"> ${this.getViewers()} viewers</div>
          <div class="item__desc">${this.getDesc()}</div>
          </div>
          </div>
          </div>`;

    return output;
  }
}



