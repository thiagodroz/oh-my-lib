import chai from 'chai';
import OhMyLib from '../src/index';

chai.expect();

const expect = chai.expect;

describe('Given the "math" functions of my lib', () => {
  describe('when the method "max" is called', () => {
    it('should return the first value if the first is bigger', () => {
      expect(OhMyLib.max(5, 2)).to.be.equal(5);
    });

    it('should return the second value if the second is bigger', () => {
      expect(OhMyLib.max(1, 2)).to.be.equal(2);
    });

    it('should be equal to the first and the second values if they are equal', () => {
      expect(OhMyLib.max(2, 2)).to.be.equal(2);
    });

    it('should return the first character if comes later in the alphabet', () => {
      expect(OhMyLib.max('x', 'a')).to.be.equal('x');
    });

    it('should return the second character if comes later in the alphabet', () => {
      expect(OhMyLib.max('x', 'z')).to.be.equal('z');
    });
  });

  describe('when the method "min" is called', () => {
    it('should return the first value if the first is smaller', () => {
      expect(OhMyLib.min(1, 2)).to.be.equal(1);
    });

    it('should return the second value if the second is bigger', () => {
      expect(OhMyLib.min(5, 2)).to.be.equal(2);
    });

    it('should be equal to the first and the second values if they are equal', () => {
      expect(OhMyLib.min(2, 2)).to.be.equal(2);
    });

    it('should return the first character if comes later in the alphabet', () => {
      expect(OhMyLib.min('a', 'c')).to.be.equal('a');
    });

    it('should return the second character if comes later in the alphabet', () => {
      expect(OhMyLib.min('x', 'd')).to.be.equal('d');
    });
  });

  describe('when the method "sumAllInRange" is called', () => {
    it('should return undefined if the first parameter is not an integer', () => {
      expect(OhMyLib.sumAllInRange('a', 2)).to.be.undefined;
    });

    it('should return undefined if the second parameter is not an integer', () => {
      expect(OhMyLib.sumAllInRange(2, 'a')).to.be.undefined;
    });

    it('should return undefined if the third parameter is passed but is not an integer', () => {
      expect(OhMyLib.sumAllInRange(2, 100, 'c')).to.be.undefined;
    });

    it('should return the sum of all elements between the first and the second parameters', () => {
      expect(OhMyLib.sumAllInRange(1, 100)).to.be.equals(5050);
    });

    it('should return the sum of all elements between the first and the second parameters, stepping the third parameter', () => {
      expect(OhMyLib.sumAllInRange(3, 99, 4)).to.be.equals(1275);
    });
  });
});
