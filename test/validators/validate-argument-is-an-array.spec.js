import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

describe('when the method "validateArgumentIsAnArray" is called', () => {
  it('should return undefined if something different of a function is passed as the first parameter', () => {
    expect(OhMyLib.validateArgumentIsAnArray(1)).to.be.undefined;
  });
  it('should return undefined if something different of an integer is passed as the second parameter', () => {
    expect(OhMyLib.validateArgumentIsAnArray(x => x, 'a')).to.be.undefined;
  });
  it('should return undefined if something different of an array is passed as the first parameter of the validated function', () => {
    expect(OhMyLib.validateArgumentIsAnArray(x => x, 1)).to.be.undefined;
  });
  it('should return the return of the function if every parameter is of the correct type', () => {
    const functionToBeValidated = paramArray => paramArray.length;

    expect(OhMyLib
      .validateArgumentIsAnArray(functionToBeValidated, 0, [1, 2, 3, 4, 5]))
      .to.be.equal(5);
  });
});
