export default class OhMyLib {
  each(list, iteratee) {
    if (list.length) {
      iteratee(list[0]);
      this.each(list.slice(1, list.length), iteratee);
    }
  }
}