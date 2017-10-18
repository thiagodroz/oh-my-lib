import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const expect = chai.expect;

describe('when the method "trueValues" is called', () => {
  it('should return undefined if something different of a list is passed', () => {
    expect(OhMyLib.trueValues(1)).to.be.undefined;
  });
  it('should return an empty list if an empty list is passed', () => {
    expect(OhMyLib.trueValues([])).to.be.empty;
  });
  it('should return an empty list if a list with only "falsy" elements is passed', () => {
    expect(OhMyLib.trueValues([0,"",null,undefined])).to.be.empty;
  });
  it('should return only the true elements if a list with more than one element is passed', () => {
    const list = [5,0,3,"","c",undefined,10];
    expect(OhMyLib.trueValues(list)).to.contains(5);
    expect(OhMyLib.trueValues(list)).to.contains(3);
    expect(OhMyLib.trueValues(list)).to.contains('c');
    expect(OhMyLib.trueValues(list)).to.contains(10);
  });
});
