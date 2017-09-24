import chai from 'chai';
import OhMyLib from '../lib/Library.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library', () => {
  before(() => {
    lib = new OhMyLib();
  });

  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('OhMyLib');
    });
  });

  describe('when I call "each" function', () => {
    it('should run the iteratee for each element of the list', () => {
      let result = [];
      lib.each([1,2,3], (element) => { result.push(element); });

      expect(result).to.contains(1);
      expect(result).to.contains(2);
      expect(result).to.contains(3);
    });
    it('should not run the iteratee for an empty list', () => {
      let result = [];
      lib.each([], (element) => { result.push(element); });

      expect(result).to.be.empty;
    });
  });

  describe('when I call "extractProperty" function', () => {
    it('should return an empty list if the property is not a string', () => {
      const list = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 },
        { a: 10, b: 11, c: 12 },
        { a: 13, b: 14, c: 15 }
      ]

      const result = lib.each(list, 'b');

      expect(result).to.be.an.empty.list;
    });
    it('should contains the values of the passed property of the list', () => {
      const list = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 },
        { a: 10, b: 11, c: 12 },
        { a: 13, b: 14, c: 15 }
      ];
      const result = lib.extractProperty(list, 'b');

      expect(result).to.be.a.list;
      expect(result).to.contains(2);
      expect(result).to.contains(5);
      expect(result).to.contains(8);
      expect(result).to.contains(11);
      expect(result).to.contains(14);
    });
  });

  describe('when I call "max" function', () => {
    it('should return the first value if the first is bigger', () => {
      expect(lib.max(5, 2)).to.be.equal(5);
    });
    it('should return the second value if the second is bigger', () => {
      expect(lib.max(1, 2)).to.be.equal(2);
    });
    it('should be equal to the first and the second values if they are equal', () => {
      expect(lib.max(2, 2)).to.be.equal(2);
    });
    it('should return the first character if comes later in the alphabet', () => {
      expect(lib.max('x', 'a')).to.be.equal('x');
    });
    it('should return the second character if comes later in the alphabet', () => {
      expect(lib.max('x', 'z')).to.be.equal('z');
    });
  });
});
