import Collections from './collections';

class OhMyLib extends Collections {
  constructor() {
    super();
    this._name = 'OhMyLib';
  }
  get name() {
    return this._name;
  }
}

export const ohMyLib = new OhMyLib();
