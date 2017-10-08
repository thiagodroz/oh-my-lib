import chai from 'chai';
import OhMyLib from '../src/index';

chai.expect();

const expect = chai.expect;

describe('Given the "arrays" functions of my lib', () => {
  describe('when the method "first" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(OhMyLib.first(1)).to.be.undefined;
    });
    it('should return undefined if an empty list is passed', () => {
      expect(OhMyLib.first([])).to.be.undefined;
    });
    it('should return the unique element if a list with a single element is passed', () => {
      expect(OhMyLib.first([5])).to.be.equal(5);
    });
    it('should return the first element if a list with more than one element is passed', () => {
      expect(OhMyLib.first([5,10,2,9])).to.be.equal(5);
    });
  });

  describe('when the method "tail" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(OhMyLib.tail(1)).to.be.undefined;
    });
    it('should return undefined if an empty list is passed', () => {
      expect(OhMyLib.tail([])).to.be.undefined;
    });
    it('should return an empty list if a list with a single element is passed', () => {
      expect(OhMyLib.tail([5])).to.be.empty;
    });
    it('should return the tail if a list with more than one element is passed', () => {
      const list = [5,10,2,9];
      expect(OhMyLib.tail(list)).to.contains(10);
      expect(OhMyLib.tail(list)).to.contains(2);
      expect(OhMyLib.tail(list)).to.contains(9);
    });
  });

  describe('when the method "last" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(OhMyLib.last(1)).to.be.undefined;
    });
    it('should return undefined if an empty list is passed', () => {
      expect(OhMyLib.last([])).to.be.undefined;
    });
    it('should return the unique element if a list with a single element is passed', () => {
      expect(OhMyLib.last([5])).to.be.equal(5);
    });
    it('should return the last element if a list with more than one element is passed', () => {
      expect(OhMyLib.last([5,10,2,9])).to.be.equal(9);
    });
  });

  describe('when the method "init" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(OhMyLib.init(1)).to.be.undefined;
    });
    it('should return an empty list if an empty list is passed', () => {
      expect(OhMyLib.init([])).to.be.empty;
    });
    it('should return an empty list if a list with a single element is passed', () => {
      expect(OhMyLib.init([5])).to.be.empty;
    });
    it('should return the head if a list with more than one element is passed', () => {
      const list = [5,10,2,9];
      expect(OhMyLib.init(list)).to.contains(5);
      expect(OhMyLib.init(list)).to.contains(10);
      expect(OhMyLib.init(list)).to.contains(2);
    });
  });

  describe('when the method "each" is called', () => {
    it('should run the iteratee for each element of the list', () => {
      let result = [];
      OhMyLib.each([1,2,3], (element) => { result.push(element); });

      expect(result).to.contains(1);
      expect(result).to.contains(2);
      expect(result).to.contains(3);
    });
    it('should not run the iteratee for an empty list', () => {
      let result = [];
      OhMyLib.each([], (element) => { result.push(element); });

      expect(result).to.be.empty;
    });
  });

  describe('when the method "maxOfList" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(OhMyLib.maxOfList(1)).to.be.undefined;
    });
    it('should return undefined if an empty list is passed', () => {
      expect(OhMyLib.maxOfList([])).to.be.undefined;
    });
    it('should return the unique element if a list with a single element is passed', () => {
      expect(OhMyLib.maxOfList([5])).to.be.equal(5);
    });
    it('should return the biggest element if a list with more than one element is passed', () => {
      expect(OhMyLib.maxOfList([5,10,2,9])).to.be.equal(10);
    });
  });

  describe('when the method "maxOccurrence" is called', () => {
    it('should return undefined if something different of a list is passed', () => {
      expect(OhMyLib.maxOccurrence(1)).to.be.undefined;
    });
    it('should return undefined if an empty list is passed', () => {
      expect(OhMyLib.maxOccurrence([])).to.be.undefined;
    });
    it('should return the unique element if a list with a single element is passed', () => {
      expect(OhMyLib.maxOccurrence([5])).to.be.equal(5);
    });
    it('should return the most frequent number if a list of numbers with more than one number is passed', () => {
      expect(OhMyLib.maxOccurrence([5,10,9,2,9,9,10,3])).to.be.equal('9');
    });
    it('should return the most frequent character if a list of characters with more than one characters is passed', () => {
      expect(OhMyLib.maxOccurrence(['a','a','c','b','c','c'])).to.be.equal('c');
    });
  });
});
