import Math from './math';

export default class Arrays extends Math {
  constructor() {
    super();
    this._name = 'Arrays';
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

  maxOfList(list) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;
    if (list.length === 1) return list[0];

    const maxOfTheEnd = this.maxOfList(list.slice(1, list.length));

    return list[0] > maxOfTheEnd ? list[0] : maxOfTheEnd;
  }

  maxOccurrence(list) {
    if (!Array.isArray(list)) return undefined;
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
