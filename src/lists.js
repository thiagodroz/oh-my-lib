export default class Lists {
  constructor() {
    this._name = 'Lists';
  }
  get name() {
    return this._name;
  }

  each(list, iteratee, results) {
    if (typeof(iteratee) !== 'function') return;
    if (!list.length) return;

    iteratee(list[0]);
    this.each(list.slice(1, list.length), iteratee);
  }
}
