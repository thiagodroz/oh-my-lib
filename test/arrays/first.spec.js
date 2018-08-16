import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

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
    expect(OhMyLib.first([5, 10, 2, 9])).to.be.equal(5);
  });
});
