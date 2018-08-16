import chai from 'chai';
import OhMyLib from '../src/index';

chai.expect();

const { expect } = chai;

describe('Given an instance of my library', () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(OhMyLib.name).to.be.equal('OhMyLib');
    });
  });
});
