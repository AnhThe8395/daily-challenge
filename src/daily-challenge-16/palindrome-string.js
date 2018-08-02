const checkPalindromeString = (strings) => {
    const palindromeString = strings.replace(/[!@#$%^&*,./<>?;:'"{}()` ]/g, "").toLowerCase();
    const length = palindromeString.length
    const mid = Math.floor(length / 2);
    for (let i = 0; i <= mid; i++) {
        if (palindromeString[i] !== palindromeString[length - i - 1]) return 0;
    }
    return 1;
}

export {
    checkPalindromeString
}