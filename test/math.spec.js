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
});
