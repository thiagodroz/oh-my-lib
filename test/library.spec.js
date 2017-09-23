import chai from 'chai';
import { Lists } from '../lib/Library.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Lists library', () => {
  before(() => {
    lib = new Lists();
  });

  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Lists');
    });
  });

  describe('when I call "each" function', () => {
    it('should run the iteratee for each element of the list', () => {
      const result = lib.each([1,2,3], (x) => { return x });

      expect(result).to.be.undefined;
    });
  });
});
