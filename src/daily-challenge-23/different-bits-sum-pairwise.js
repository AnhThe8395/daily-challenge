const differentBitsSumPairwise = (...arr) => {
    const length = arr.length;
    let sum = 0;
    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (let j = 0; j < length; j++)
            if ((arr[j] & (1 << i)) === 0) {
                count++;
            }
        sum += count * (length - count) * 2;
    }
    return sum % 1000000007;
}
//Buffalo
const countBit1 = number => {
    let count = 0;
    while (number > 0) {
        if (number % 2) count++;
        number = Math.floor(number / 2);
    }
    return count;
}
const differentBitsSumPairwise_Buffalo = (...arr) => {
    const length = arr.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            sum += countBit1((arr[i] ^ arr[j])) * 2
        }
    }
    return sum;
}
export {
    differentBitsSumPairwise
}