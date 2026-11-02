const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.cipher(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.cipher(encryptedMessage, key, -1);
  }

  cipher(message, key, direction) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const normalizedKey = key.toUpperCase();
    let keyIndex = 0;
    const transformed = message.replace(/[a-z]/gi, (letter) => {
      const uppercaseLetter = letter.toUpperCase();
      const shift = normalizedKey.charCodeAt(keyIndex % normalizedKey.length) - 65;
      keyIndex += 1;
      const letterIndex = uppercaseLetter.charCodeAt(0) - 65;
      return String.fromCharCode(((letterIndex + direction * shift + 26) % 26) + 65);
    });

    return this.isDirect ? transformed : [...transformed].reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
