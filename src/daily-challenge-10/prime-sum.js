const primeSum = n => {
    let isPrime = [];
    for (let i = 0; i <= n; i++)isPrime[i] = true;
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i)
                isPrime[j] = false;
        }
    }
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i] && isPrime[n - i]) {
            return [i, n - i];
        }
    }
}
export {
    primeSum
}