import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const expect = chai.expect;

describe('when the method "trueValues" is called', () => {
  it('should return undefined if something different of a list is passed', () => {
    expect(OhMyLib.except(1)).to.be.undefined;
  });
  it('should return an empty list if an empty list is passed', () => {
    expect(OhMyLib.except([],2,3,4)).to.not.be.undefined;
    expect(OhMyLib.except([])).to.be.empty;
  });
  it('should return an empty list if a list that only contains the exceptions is passed', () => {
    const result = OhMyLib.except([2,2,4,3,3,2], 2, 3, 4);

    expect(result).to.not.be.undefined;
    expect(result).to.be.empty;
  });
  it('should return part of the list if a list that contains the exceptions is passed', () => {
    const result = OhMyLib.except([2,1,2,4,3,"a",3,2], 2, 3, 4);

    expect(result).to.not.be.undefined;
    expect(result).to.not.be.empty;
    expect(result).to.contains(1);
    expect(result).to.contains("a");
  });
  it('should return the entire list if a list that doesnt contains the exceptions is passed', () => {
    const list = [1,9,7,8];
    const result = OhMyLib.except(list, 2, 3, 4);

    expect(result).to.not.be.undefined;
    expect(result).to.not.be.empty;
    expect(result).to.be.equals;
  });
});
