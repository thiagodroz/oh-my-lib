export default class OhMyLib {
  constructor() {
    this._name = 'OhMyLib';
  }
  get name() {
    return this._name;
  }

  each(list, iteratee, results) {
    if (typeof iteratee !== 'function') return;
    if (!list.length) return;

    iteratee(list[0]);
    this.each(list.slice(1, list.length), iteratee);
  }

  extractProperty(list, property) {
    if (typeof property !== 'string') return [];

    let extractedList = [];

    this.each(list, (element) => {
      extractedList.push(element[property]);
    });

    return extractedList;
  }

  max(x, y) {
    if (x === undefined || y === undefined) return undefined;

    return x > y ? x : y;
  }

  maxOfProperty(list, property) {
    if (!list.length) return;
  }
}
