import chai from 'chai';
import OhMyLib from '../../src/index';

chai.expect();

const expect = chai.expect;

describe('when the method "extractProperty" is called', () => {
  it('should return an empty list if the property is not a string', () => {
    const list = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
      { a: 7, b: 8, c: 9 },
      { a: 10, b: 11, c: 12 },
      { a: 13, b: 14, c: 15 }
    ];

    expect(OhMyLib.each(list, 'b')).to.be.an.empty.list;
  });
  it('should contains the values of the passed property of the list', () => {
    const list = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
      { a: 7, b: 8, c: 9 },
      { a: 10, b: 11, c: 12 },
      { a: 13, b: 14, c: 15 }
    ];
    const result = OhMyLib.extractProperty(list, 'b');

    expect(result).to.be.a.list;
    expect(result).to.contains(2);
    expect(result).to.contains(5);
    expect(result).to.contains(8);
    expect(result).to.contains(11);
    expect(result).to.contains(14);
  });
  it('should return undefined if the passed property isnt a string', () => {
    const list = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
      { a: 7, b: 8, c: 9 },
      { a: 10, b: 11, c: 12 },
      { a: 13, b: 14, c: 15 }
    ];

    expect(OhMyLib.extractProperty(list, 2)).to.be.undefined;
  });
});
