import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const expect = chai.expect;

describe('when the method "filter" is called', () => {
  it('should return undefined if something different than a list is passed', () => {
    let result = OhMyLib.filter(2, (element) => { return element >= 2 });

    expect(result).to.be.undefined;
  });
  it('should return undefined if something different than a function is passed', () => {
    let result = OhMyLib.filter([], 2);

    expect(result).to.be.undefined;
  });
  it('should return an empty list if an empty list is passed', () => {
    let result = OhMyLib.filter([], (element) => { return element >= 2 });

    expect(result).to.be.empty;
  });
  it('should return the valid elements if a list is passed', () => {
    let result = OhMyLib.filter([1,2,3], (element) => { return element >= 2 });

    expect(result).to.contains(2);
    expect(result).to.contains(3);
  });
});
