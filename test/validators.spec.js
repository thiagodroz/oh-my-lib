import chai from 'chai';
import OhMyLib from '../src/index';

chai.expect();

const expect = chai.expect;

describe('Given the "validators" functions of my lib', () => {
  describe('when the method "validateNoneIsUndefined" is called', () => {
    it('should return undefined if something different of a function is passed as the first parameter', () => {
      expect(OhMyLib.validateNoneIsUndefined(1)).to.be.undefined;
    });

    it('should return undefined if undefined parameters are passed to the validated function', () => {
      expect(OhMyLib.validateNoneIsUndefined((x) => { return x; }, undefined, undefined)).to.be.undefined;
    });

    it('should return the return of the function if a function is passed as the first parameter', () => {
      expect(OhMyLib.validateNoneIsUndefined(() => { return 1; })).to.be.equal(1);
      expect(OhMyLib.validateNoneIsUndefined(() => { })).to.be.undefined;
      expect(OhMyLib.validateNoneIsUndefined((x) => { return x; }, 1)).to.be.equal(1);
    });
  });

  describe('when the method "validateArgumentIsAnArray" is called', () => {
    it('should return undefined if something different of a function is passed as the first parameter', () => {
      expect(OhMyLib.validateArgumentIsAnArray(1)).to.be.undefined;
    });

    it('should return undefined if something different of an integer is passed as the second parameter', () => {
      expect(OhMyLib.validateArgumentIsAnArray((x) => { return x; }, 'a')).to.be.undefined;
    });

    it('should return undefined if something different of an array is passed as the first parameter of the validated function', () => {
      expect(OhMyLib.validateArgumentIsAnArray((x) => { return x; }, 1)).to.be.undefined;
    });

    it('should return the return of the function if every parameter is of the correct type', () => {
      const functionToBeValidated = (paramArray) => {
        return paramArray.length;
      };

      expect(OhMyLib.validateArgumentIsAnArray(functionToBeValidated, 0, [1,2,3,4,5])).to.be.equal(5);
    });
  });

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
      const functionToBeValidated = (paramArray) => {
        return paramArray.length;
      };

      const iterateeFunction = (element) => {
        return element > 3;
      };

      expect(OhMyLib.validateArgumentIsAFunction(functionToBeValidated, 1, [1,2,3,4,5], iterateeFunction)).to.be.equal(5);
    });
  });
});
