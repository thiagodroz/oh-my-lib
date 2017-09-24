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
    if (typeof property !== 'string') return undefined;

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

  maxOfList(list) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;
    if (list.length === 1) return list[0];

    const maxOfTheEnd = this.maxOfList(list.slice(1, list.length));

    return list[0] > maxOfTheEnd ? list[0] : maxOfTheEnd;
  }

  maxOfProperty(list, property) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;
    if (typeof property !== 'string') return undefined;

    return this.maxOfList(this.extractProperty(list, property));
  }
}
