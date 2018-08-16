import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

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
    expect(OhMyLib.maxOccurrence([5, 10, 9, 2, 9, 9, 10, 3])).to.be.equal('9');
  });
  it('should return the most frequent character if a list of characters with more than one characters is passed', () => {
    expect(OhMyLib.maxOccurrence(['a', 'a', 'c', 'b', 'c', 'c'])).to.be.equal('c');
  });
});
