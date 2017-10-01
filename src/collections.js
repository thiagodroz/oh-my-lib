import Arrays from './arrays';

export default class Collections extends Arrays {
  constructor() {
    super();
    this._name = 'Collections';
  }
  get name() {
    return this._name;
  }

  extractProperty(list, property) {
    if (typeof property !== 'string') return undefined;

    let extractedList = [];

    this.each(list, (element) => {
      extractedList.push(element[property]);
    });

    return extractedList;
  }

  maxOfProperty(list, property) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;
    if (typeof property !== 'string') return undefined;

    return this.maxOfList(this.extractProperty(list, property));
  }
};
