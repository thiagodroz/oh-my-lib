import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

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
    const list = [5, 10, 2, 9];
    expect(OhMyLib.tail(list)).to.contains(10);
    expect(OhMyLib.tail(list)).to.contains(2);
    expect(OhMyLib.tail(list)).to.contains(9);
  });
});
