import { Thing } from "./thing";

class Fleet {
  private _things: Thing[];

  constructor() {
    this._things = [];
  }

  add(thing: Thing) {
    this._things.push(thing);
  }

  get things() {
    return this._things;
  }
}

export { Fleet };