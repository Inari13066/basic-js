const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let answer = {};
    for (let i = 0; i < domains.length; i++) {
        let arr = domains[i].split(".").reverse();
        arr = arr.map((i) => "." + i);
        let domain = "";
        for (let j = 0; j < arr.length; j++) {
            domain += arr[j];
            if (Object.keys(answer).includes(domain)) {
                answer[domain]++;
            } else {
                answer[domain] = 1;
            }
        }
    }
    return answer;
}

module.exports = {
    getDNSStats,
};
