export default class Validators {
  applyValidation(toBeValidated, validator, ...passedArguments) {
    return validator.bind(this, this.max, ...passedArguments);
  }

  validateNoneIsUndefined(toBeValidated, ...passedArguments) {
    if (typeof toBeValidated !== 'function') return undefined;

    for (let argument in passedArguments) {
      if (argument === undefined) {
        return undefined;
      }
    }
    return toBeValidated(...passedArguments);
  }
};
