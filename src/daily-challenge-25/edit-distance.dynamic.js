const editDistance = (wordsA, wordsB) => {
    let dynamic = [];
    const n = wordsA.length;
    const m = wordsB.length;
    for (let i = 0; i <= n; i++) {
        dynamic[i] = [];
        for (let j = 0; j <= m; j++) {
            if (i === 0) dynamic[i][j] = j;
            else if (j === 0) dynamic[i][j] = i;
            else if (wordsA[i - 1] === wordsB[j - 1]) dynamic[i][j] = dynamic[i - 1][j - 1];
            else dynamic[i][j] = 1 + Math.min(dynamic[i - 1][j - 1],
                dynamic[i][j - 1], dynamic[i - 1][j])
        }
    }
    return dynamic[n][m];
}

export {
    editDistance
}