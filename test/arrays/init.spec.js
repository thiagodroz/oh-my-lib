import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

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
    const list = [5, 10, 2, 9];
    expect(OhMyLib.init(list)).to.contains(5);
    expect(OhMyLib.init(list)).to.contains(10);
    expect(OhMyLib.init(list)).to.contains(2);
  });
});
