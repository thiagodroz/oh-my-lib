export default class Validators {
  applyValidation(toBeValidated, validator, ...passedArguments) {
    return validator.bind(this, toBeValidated, ...passedArguments);
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

  validateArgumentIsAnArray(toBeValidated, argumentIndex, ...passedArguments) {
    if (typeof toBeValidated !== 'function') return undefined;
    if (!Number.isInteger(argumentIndex)) return undefined;
    if (!Array.isArray(passedArguments[argumentIndex])) return undefined;

    return toBeValidated.bind(this)(...passedArguments);
  }

  validateArgumentIsAFunction(toBeValidated, argumentIndex, ...passedArguments) {
    if (typeof toBeValidated !== 'function') return undefined;
    if (!Number.isInteger(argumentIndex)) return undefined;
    if (typeof passedArguments[argumentIndex] !== 'function') return undefined;

    return toBeValidated.bind(this)(...passedArguments);
  }
};
