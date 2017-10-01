export default class Math {
  constructor() {
    this._name = 'Math';
  }
  get name() {
    return this._name;
  }

  max(x, y) {
    if (x === undefined || y === undefined) return undefined;

    return x > y ? x : y;
  }
};
