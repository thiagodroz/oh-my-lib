import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const expect = chai.expect;

describe('when the method "validateArgumentIsAFunction" is called', () => {
  it('should return undefined if something different of a function is passed as the first parameter', () => {
    expect(OhMyLib.validateArgumentIsAFunction(1)).to.be.undefined;
  });
  it('should return undefined if something different of an integer is passed as the second parameter', () => {
    expect(OhMyLib.validateArgumentIsAFunction((x) => { return x; }, 'a')).to.be.undefined;
  });
  it('should return undefined if something different of an array is passed as the first parameter of the validated function', () => {
    expect(OhMyLib.validateArgumentIsAFunction((x) => { return x; }, 1)).to.be.undefined;
  });
  it('should return the return of the function if every parameter is of the correct type', () => {
    const functionToBeValidated = (paramArray) => { return paramArray.length; };
    const iterateeFunction = (element) => { return element > 3; };

    expect(OhMyLib.validateArgumentIsAFunction(functionToBeValidated, 1, [1,2,3,4,5], iterateeFunction)).to.be.equal(5);
  });
});
