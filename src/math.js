import Validators from './validators';

export default class Math extends Validators {
  constructor() {
    super();

    this.max = this.applyValidation.bind(this, this.max, this.validateNoneIsUndefined)();
  }

  max(x, y) {
    return x > y ? x : y;
  }
};
