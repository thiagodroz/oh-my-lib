import Validators from './validators';

export default class Math extends Validators {
  constructor() {
    super();

    this.max = this.applyValidation.bind(this, this.max, this.validateNoneIsUndefined)();
    this.min = this.applyValidation.bind(this, this.min, this.validateNoneIsUndefined)();
  }

  max = (x, y) => (x > y ? x : y)

  min = (x, y) => (x < y ? x : y)

  sumAllInRange = (from, to, step = 1) => {
    if (!Number.isInteger(from)) return undefined;
    if (!Number.isInteger(to)) return undefined;
    if (!Number.isInteger(step)) return undefined;

    const numberOfTerms = (to - from) / step;

    return ((numberOfTerms / 2) * ((2 * from) + ((numberOfTerms - 1) * step))) + to;
  }
}
