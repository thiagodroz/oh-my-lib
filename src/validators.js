export default class Validators {
  applyValidation(toBeValidated, validator, ...passedArguments) {
    return validator.bind(this, this.max, ...passedArguments);
  }

  validateNoneIsUndefined(toBeValidated, ...passedArguments) {
    if (typeof toBeValidated !== 'function') return undefined;

    for (let index in passedArguments) {
      if (passedArguments[index] === undefined) {
        return undefined;
      }
    }
    return toBeValidated(...passedArguments);
  }
};
