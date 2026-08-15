/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let x = [];

    let map = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            x.push(s[i]);
        }
        else {
            let top = x.pop();
            if (!top || s[i] != map[top]) {
                return false;
            }
        }
    }
    return x.length === 0;
};