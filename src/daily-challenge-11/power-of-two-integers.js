const greatestCommonDivisor = (a, b) => {
    while (a !== b) {
        if (a > b) a = a - b;
        else b = b - a;
    }
    return a;
}
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
    const checkRs = checkIntegers.filter(item => item !== 0);
    const greatestDivisor = checkRs.reduce(greatestCommonDivisor);
    return greatestDivisor !== 1;
}
const powerOfTwoIntegers2 = n => {
    for (let i = 31; i > 1; i--) {
        let numberA = 2;
        while (numberA ** i <= n) {
            if (numberA ** i < n) numberA++;
            else if (numberA ** i === n) return true;
        }
    }
    return false;
}
export {
    powerOfTwoIntegers,
    powerOfTwoIntegers2
}