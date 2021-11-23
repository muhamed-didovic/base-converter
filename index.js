module.exports = class BC {

  /**
   * @type {string}
   */
  static base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  /**
   * Convert a from a given base to base 10.
   *
   * @param {number} value
   * @param {number} b
   *
   * @return string
   */
  static toBase(value, b = 62) {
    let r = value%b;
    let result = this.base[r];
    let q = Math.floor(value/b);

    while (q) {
      r = q%b;
      q = Math.floor(q/b);
      result = this.base[r] + result;
    }

    return result;
  }

  /**
   * Convert from base 10 to another base.
   *
   * @param {string} value
   * @param {number} b
   *
   * @return string
   */
  static toBase10(value, b = 62) {
    let limit = value.length;
    let result = this.base.indexOf(value[0]);

    for (let i = 1; i < limit; i++) {
      result = (b*result) + this.base.indexOf(value[i]);
    }

    return result;
  }
}
