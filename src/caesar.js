function caesar(string, shift) {
  let alphabet, stringAsArray, shifted;

  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  stringAsArray = string.split('');

  shifted = stringAsArray
    .map((letter) => {
      let isUpperCase = letter.match(/[A-Z]/);
      if (letter.match(/[^a-z]/i)) return letter;

      let normalized = letter.toLowerCase();
      let convertedToNumber = alphabet.findIndex((el) => el === normalized);
      let shiftedNumber = (convertedToNumber + shift) % 26;

      let reconverted = alphabet[shiftedNumber];
      if (isUpperCase) reconverted = reconverted.toUpperCase();

      return reconverted;
    })
    .join('');

  return shifted;
}

export default caesar;
