import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

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
