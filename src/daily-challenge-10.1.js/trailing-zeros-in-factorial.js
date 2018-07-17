const countNumber5 = n => {
    let count5 = 0;
    while (n % 5 == 0) {
        count5++;
        n /= 5;
    }
    return count5;
}
const trailingZerosinFactorial = n => {
    let trailingZero = 0;
    for (let i = 1; i <= n; i++)trailingZero += countNumber5(i);
    return trailingZero;
}

export {
    trailingZerosinFactorial
}