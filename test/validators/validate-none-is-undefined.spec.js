import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const { expect } = chai;

describe('when the method "validateNoneIsUndefined" is called', () => {
  it('should return undefined if something different of a function is passed as the first parameter', () => {
    expect(OhMyLib.validateNoneIsUndefined(1)).to.be.undefined;
  });
  it('should return undefined if undefined parameters are passed to the validated function', () => {
    expect(OhMyLib.validateNoneIsUndefined(x => x, undefined, undefined)).to.be.undefined;
  });
  it('should return the return of the function if a function is passed as the first parameter', () => {
    expect(OhMyLib.validateNoneIsUndefined(() => 1)).to.be.equal(1);
    expect(OhMyLib.validateNoneIsUndefined(() => {})).to.be.undefined;
    expect(OhMyLib.validateNoneIsUndefined(x => x, 1)).to.be.equal(1);
  });
});
