import { expect } from 'chai';
import { decryptWord,decryptWords } from '../src/find_phone';

describe('Find Phone', () => {
  
  describe('Smoke tests', () => {
    it('should exist the method decryptWord', () => {
      expect(decryptWord).to.exist;
      expect(decryptWord).to.be.a.function;
    });
    it('should exist the method decryptWords', () => {
      expect(decryptWords).to.be.exist;
      expect(decryptWords).to.be.a.function;
    });
    it('should return a string when decryptWord is called', () => {
      expect(decryptWord("MY")).to.be.a.string;
    });
    it('should return an array when decryptWords is called', () => {
      expect(decryptWords(["MY", "NYAN"])).to.be.an.array;
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

  describe('decryptWords', () => {
    it('should return an array of strings with values ["69", "6926"] when decryptWords(["MY", "NYAN"])', () => {
      const words = ['MY', 'NYAN'];
      const numbers = ['69', '6926'];
      expect(decryptWords(words)).to.have.deep.members(numbers);
    });
    it('should return an array of strings with values ["69 5683", "6926 228"] when decryptWords(["MY LOVE", "NYAN CAT"])', () => {
      const words = ["MY LOVE", "NYAN CAT"];
      const numbers = ["69 5683", "6926 228"];
      expect(decryptWords(words)).to.have.deep.members(numbers);
    });

    it('should return an array of strings with values ["69-5683","11-6926-5683"] when decryptWords(["MY-LOVE", "11-NYAN-LOVE"])', () => {
      const words = ['MY-LOVE', '11-NYAN-LOVE'];
      const numbers = ['69-5683','11-6926-5683'];
      expect(decryptWords(words)).to.have.deep.members(numbers);
    });
  });


});
