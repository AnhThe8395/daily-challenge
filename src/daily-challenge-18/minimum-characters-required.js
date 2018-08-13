const computeLPSArray = (subString) => {
    const lps = [];
    const length = subString.length;
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

const minimumCharactersRequired = (notPalindromic) => {
    const length = notPalindromic.length;
    const newString = notPalindromic + '$' + notPalindromic.split('').reverse().join('');
    const lps = computeLPSArray(newString);
    return length - lps[length * 2];
}
export {
    minimumCharactersRequired
}