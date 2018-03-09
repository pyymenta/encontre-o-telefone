import { expect } from 'chai';
import { decryptWord } from '../src/find_phone';

describe('Decrypt Word', () => {
  
  describe('Smoke tests', () => {
    it('should exist the method decryptWord', () => {
      expect(decryptWord).to.exist;
      expect(decryptWord).to.be.a.function;
    });
  });
  
  describe('decryptWord', () => {
    it('should return "69" when decryptWord("MY")', () => {
      expect(decryptWord('MY')).to.be.equal('69');
    });

    it('should return "6926" when decryptWord("NYAN")', () => {
      expect(decryptWord('NYAN')).to.be.equal('6926');
    });
    it('should return "69 5683" when decryptWord("MY LOVE")', () => {
      expect(decryptWord('MY LOVE')).to.be.equal('69 5683');
    });

    it('should return "6926 228" when decryptWord("NYAN CAT")', () => {
      expect(decryptWord('NYAN CAT')).to.be.equal('6926 228');
    });

    it('should return "69-5683" when decryptWord("MY-LOVE")', () => {
      expect(decryptWord('MY-LOVE')).to.be.equal('69-5683');
    });

    it('should return "69-5683" when decryptWord("my-LoVe")', () => {
      expect(decryptWord('my-LoVe')).to.be.equal('69-5683');
    });

    it('should return "11-6926-5683" when decryptWord("11-NYAN-LOVE")', () => {
      expect(decryptWord('11-NYAN-LOVE')).to.be.equal('11-6926-5683');
    });
  });

});
