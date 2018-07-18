const powerOfTwoIntegers = n => {
    let checkIntegers = [];
    for (let i = 0; i <= n; i++)checkIntegers[i] = 0;
    let thuaso = 2;
    while (n > 1) {
        if (n % thuaso === 0) {
            checkIntegers[thuaso] += 1;
            n /= thuaso;
        }
        else thuaso++;
    }
    const checkRs = [...new Set(checkIntegers.filter(item => item !== 0 && item !== 1))];
    return checkRs.length === 1;
}
export {
    powerOfTwoIntegers
}