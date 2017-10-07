import Math from './math';

export default class Arrays extends Math {
  first(list) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;

    return list[0];
  }

  tail(list) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;
    if (list.length === 1) return [];

    return list.slice(1, list.length);
  }

  last(list) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;

    return list[list.length - 1];
  }

  init(list) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;

    return list.slice(0, list.length - 1);
  }

  each(list, iteratee, results) {
    if (typeof iteratee !== 'function') return;
    if (!list.length) return;

    iteratee(list[0]);
    this.each(this.tail(list), iteratee);
  }

  maxOfList(list) {
    if (!Array.isArray(list)) return undefined;
    if (!list.length) return undefined;
    if (list.length === 1) return list[0];

    const maxOfTheEnd = this.maxOfList(this.tail(list));

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
