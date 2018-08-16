import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

describe('when the method "maxOfProperty" is called', () => {
  it('should return undefined if something different of a list is passed', () => {
    expect(OhMyLib.maxOfProperty(1, 'age')).to.be.undefined;
  });
  it('should return undefined if something different of a string is passed to property', () => {
    expect(OhMyLib.maxOfProperty([{ age: 20 }], 3)).to.be.undefined;
  });
  it('should return undefined if an empty list is passed', () => {
    expect(OhMyLib.maxOfProperty([])).to.be.undefined;
  });
  it('should return the unique element if a list with a single element is passed', () => {
    expect(OhMyLib.maxOfProperty([{ age: 20 }], 'age')).to.be.equal(20);
  });
  it('should return the biggest element if a list with more than one element is passed', () => {
    expect(OhMyLib.maxOfProperty([
      { age: 20 },
      { age: 25 },
      { age: 10 },
      { age: 40 },
    ], 'age')).to.be.equal(40);
  });
});
