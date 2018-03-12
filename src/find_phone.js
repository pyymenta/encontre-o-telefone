const keyboard = {
  1: ['1'],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
  ' ': [' '],
  '-': ['-'],
};
const getNumberKeyboard = (character) => {
  let keyFound;
  const keys = Object.keys(keyboard);
  const values = Object.values(keyboard);
  for (let i = 0; i < keys.length; i += 1) {
    if (values[i].includes(character.toUpperCase())) {
      keyFound = keys[i];
    }
  }
  return keyFound;
};

const decryptWord = word => word.split('').reduce((fullNumber, currentNum, index) => {
  if (index === 1) {
    return getNumberKeyboard(fullNumber) + getNumberKeyboard(currentNum);
  }
  return fullNumber + getNumberKeyboard(currentNum);
});

const decryptWords = words => words.map(word => decryptWord(word));

export { decryptWord, decryptWords };
