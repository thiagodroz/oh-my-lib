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

  describe('when the method "each" is called', () => {
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

  describe('when the method "extractProperty" is called', () => {
    it('should return an empty list if the property is not a string', () => {
      const list = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 },
        { a: 10, b: 11, c: 12 },
        { a: 13, b: 14, c: 15 }
      ];

      expect(lib.each(list, 'b')).to.be.an.empty.list;
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
    it('should return undefined if the passed property isnt a string', () => {
      const list = [
        { a: 1, b: 2, c: 3 },
        { a: 4, b: 5, c: 6 },
        { a: 7, b: 8, c: 9 },
        { a: 10, b: 11, c: 12 },
        { a: 13, b: 14, c: 15 }
      ];

      expect(lib.extractProperty(list, 2)).to.be.undefined;
    });
  });

  describe('when the method "max" is called', () => {
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

  describe('when the method "maxOfList" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(lib.maxOfList(1)).to.be.undefined;
    });
    it('should return undefined if an empty list is passed', () => {
      expect(lib.maxOfList([])).to.be.undefined;
    });
    it('should return the unique element if a list with a single element is passed', () => {
      expect(lib.maxOfList([5])).to.be.equal(5);
    });
    it('should return the biggest element if a list with more than one element is passed', () => {
      expect(lib.maxOfList([5,10,2,9])).to.be.equal(10);
    });
  });

  describe('when the method "maxOfProperty" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(lib.maxOfProperty(1, 'age')).to.be.undefined;
    });
    it('should return undefined if something different of a string is passed to property', () => {
      expect(lib.maxOfProperty(1, 'age')).to.be.undefined;
    });
    it('should return undefined if an empty list is passed', () => {
      expect(lib.maxOfProperty([])).to.be.undefined;
    });
    it('should return the unique element if a list with a single element is passed', () => {
      expect(lib.maxOfProperty([{ age: 20 }], 'age')).to.be.equal(20);
    });
    it('should return the biggest element if a list with more than one element is passed', () => {
      expect(lib.maxOfProperty([
        { age: 20 },
        { age: 25 },
        { age: 10 },
        { age: 40 }
      ], 'age')).to.be.equal(40);
    });
  });
});
