const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(type = true) {
    this.type = type;
  }
  encrypt(m, k) {
    if (
      arguments.length !== 2 ||
      arguments[0] == undefined ||
      arguments[1] == undefined
    ) {
      throw new Error("Incorrect arguments!");
    }
    m = m.toUpperCase();
    k = k.toUpperCase();

    let c = "";
    let j = 0;
    for (let i = 0; i < m.length; i++) {
      if (m[i].toUpperCase() != m[i].toLowerCase()) {
        let n = m[i].charCodeAt() + k[j].charCodeAt() - "A".charCodeAt();

        if (n > "Z".charCodeAt()) {
          n = n - 26;
        }
        console.log(n, String.fromCharCode(n));
        c = c + String.fromCharCode(n);
        j++;
        if (j === k.length) {
          j = 0;
        }
      } else {
        c = c + m[i];
      }
    }
    if (this.type === true) {
      return c;
    } else if (this.type === false) {
      return c.split("").reverse().join("");
    }
  }
  decrypt(c, k) {
    if (
      arguments.length !== 2 ||
      arguments[0] === undefined ||
      arguments[1] === undefined
    ) {
      throw new Error("Incorrect arguments!");
    }
    c = c.toUpperCase();
    k = k.toUpperCase();
    let m = "";
    let j = 0;
    for (let i = 0; i < c.length; i++) {
      if (c[i].toUpperCase() != c[i].toLowerCase()) {
        let n = c[i].charCodeAt() - k[j].charCodeAt() + "A".charCodeAt();
        if (n < "A".charCodeAt()) {
          n = n + 26;
        }
        m = m + String.fromCharCode(n);
        j++;
        if (j === k.length) {
          j = 0;
        }
      } else {
        m = m + c[i];
      }
    }
    if (this.type === true) {
      return m;
    } else if (this.type === false) {
      return m.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};

// const directMachine = new VigenereCipheringMachine();

// console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
