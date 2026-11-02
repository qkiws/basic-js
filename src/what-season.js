const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  let month;
  try {
    if (!(date instanceof Date)) {
      throw new Error();
    }
    const time = Date.prototype.getTime.call(date);
    if (Number.isNaN(time)) {
      throw new Error();
    }
    month = Date.prototype.getMonth.call(date);
  } catch {
    throw new Error('Invalid date!');
  }

  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
}

module.exports = {
  getSeason
};
