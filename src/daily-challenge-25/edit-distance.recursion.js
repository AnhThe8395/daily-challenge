const countEditDistance = (wordsA, wordsB, n, m) => {
    if (m === 0) return n;
    if (n === 0) return m;
    if (wordsA[n - 1] === wordsB[m - 1]) {
        return countEditDistance(wordsA, wordsB, n - 1, m - 1);
    }
    return 1 + Math.min(countEditDistance(wordsA, wordsB, n, m - 1),
        countEditDistance(wordsA, wordsB, n - 1, m), countEditDistance(wordsA, wordsB, n - 1, m - 1));
}

const editDistance = (wordsA, wordsB) => {
    return countEditDistance(wordsA, wordsB, wordsA.length, wordsB.length);
}

console.log(editDistance('abc', 'def'));