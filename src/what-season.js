const { NotImplementedError } = require("../extensions/index.js");

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
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }
  if (!date instanceof Date) {
    throw new Error("Invalid date");
  }
  console.log(date.getMonth());
  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return "winter";
      break;
    case 2:
    case 3:
    case 4:
      return "spring";
      break;
    case 5:
    case 6:
    case 7:
      return "summer";
      break;
    case 8:
    case 9:
    case 10:
      return "autumn";
      break;
  }
}

module.exports = {
  getSeason,
};

let testDate = new Date(2019, 11, 22, 23, 45, 11, 500);
console.log(getSeason(testDate));
