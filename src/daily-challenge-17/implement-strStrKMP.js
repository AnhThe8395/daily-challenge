const computeLPSArray = subString => {
    const length = subString.length;
    const lps = [];
    let i = 1, len = 0;
    lps[0] = 0;
    while (i < length) {
        if (subString[i] === subString[len]) {
            len += 1;
            lps[i] = len;
            i += 1;
        } else {
            if (len === 0) {
                lps[i] = 0;
                i += 1;
            } else {
                len = lps[len - 1];
            }
        }
    }
    return lps;
}
const KMPSearch = (string, subString) => {
    const m = string.length;
    const l = subString.length;
    const lps = computeLPSArray(subString);
    let i = 0, j = 0;
    while (i < m) {
        if (string[i] === subString[j]) {
            i += 1;
            j += 1;
        } else {
            if (j === 0) {
                i += 1;
            } else {
                j = lps[j - 1];
            }
        }
        if (j === l) {
            return i - j;
        }
    }
    return -1;
}
export {
    KMPSearch
}