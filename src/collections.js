import Arrays from './arrays';

export default class Collections extends Arrays {
  constructor(props) {
    super(props);

    this.maxOfProperty = this.applyValidation
      .bind(this, this.maxOfProperty, this.validateArgumentIsAnArray, 0)();
  }

  extractProperty(list, property) {
    if (typeof property !== 'string') return undefined;

    const extractedList = [];

    this.each(list, (element) => {
      extractedList.push(element[property]);
    });

    return extractedList;
  }

  maxOfProperty(list, property) {
    if (!list.length) return undefined;
    if (typeof property !== 'string') return undefined;

    return this.maxOfList(this.extractProperty(list, property));
  }
}
