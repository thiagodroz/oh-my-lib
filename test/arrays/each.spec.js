import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const expect = chai.expect;

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
