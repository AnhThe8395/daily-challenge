const countNumber5 = n => {
    let count5 = 0;
    while (n > 5) {
        count5++;
        n /= 5;
    }
    return count5;
}

const trailingZerosinFactorial = n => {
    const count5 = countNumber5(n);
    let trailingZero = 0;
    for (let i = 1; i <= count5; i++) {
        trailingZero += Math.floor(n / Math.pow(5, i));
    }
    return trailingZero;
}
export {
    trailingZerosinFactorial
}