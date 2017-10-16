import Math from './math';

export default class Arrays extends Math {
  constructor() {
    super();

    this.first = this.applyValidation.bind(this, this.first, this.validateArgumentIsAnArray, 0)();
    this.tail = this.applyValidation.bind(this, this.tail, this.validateArgumentIsAnArray, 0)();
    this.last = this.applyValidation.bind(this, this.last, this.validateArgumentIsAnArray, 0)();
    this.init = this.applyValidation.bind(this, this.init, this.validateArgumentIsAnArray, 0)();
    this.each = this.applyValidation.bind(this, this.each, this.validateArgumentIsAFunction, 1)();
    this.filter = this.applyValidation.bind(this, this.filter, this.validateArgumentIsAnArray, 0)();
    this.filter = this.applyValidation.bind(this, this.filter, this.validateArgumentIsAFunction, 1)();
    this.maxOfList = this.applyValidation.bind(this, this.maxOfList, this.validateArgumentIsAnArray, 0)();
    this.maxOccurrence = this.applyValidation.bind(this, this.maxOccurrence, this.validateArgumentIsAnArray, 0)();
  }

  first(list) {
    if (!list.length) return undefined;

    return list[0];
  }

  tail(list) {
    if (!list.length) return undefined;
    if (list.length === 1) return [];

    return list.slice(1, list.length);
  }

  last(list) {
    if (!list.length) return undefined;

    return list[list.length - 1];
  }

  init(list) {
    if (!list.length) return undefined;

    return list.slice(0, list.length - 1);
  }

  each(list, iteratee) {
    if (!list.length) return;

    iteratee(list[0]);
    this.each(this.tail(list), iteratee);
  }

  filter(list, iteratee) {
    let result = [];

    this.each(list, (element) => {
      if (iteratee(element)) {
        result.push(element);
      }
    });

    return result;
  }

  maxOfList(list) {
    if (!list.length) return undefined;
    if (list.length === 1) return list[0];

    const maxOfTheEnd = this.maxOfList.bind(this)(this.tail(list));

    return this.max(list[0], maxOfTheEnd);
  }

  maxOccurrence(list) {
    if (!list.length) return undefined;
    if (list.length === 1) return list[0];

    let occurrences = [];

    list.map((element) => {
      if (occurrences[element] === undefined) {
        occurrences[element] = 1;
      }

      occurrences[element]++;
    });

    let mostFrenquent;
    let frequency = 0;

    for (let key in occurrences) {
      if (occurrences[key] > frequency) {
        frequency = occurrences[key];
        mostFrenquent = key;
      }
    }

    return mostFrenquent;
  }
};
