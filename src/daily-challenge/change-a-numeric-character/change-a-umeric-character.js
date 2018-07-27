const eratosthenes = n => {
    let isPrime = [];
    for (let i = 0; i <= n; i++)isPrime[i] = true;
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}
const changeUnitNumber = (num, changeNum, unit) => {
    let listNumber = [];
    while (num > 0) {
        listNumber.push(num % 10);
        num = Math.floor(num / 10);
    }
    listNumber[listNumber.length - unit] = changeNum;
    return listNumber.reverse().join('') - 0;
}
const changeANumericCharater = (a, b) => {
    const isPrime = eratosthenes(9999);
    let isCheck = [];
    for (let i = 0; i <= 9999; i++)isCheck[i] = true;
    isCheck[a] = false;
    let numberPrime = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 5; j++) {
            const unitNumber = changeUnitNumber(a, i, j);
            if (isPrime[unitNumber] && isCheck[unitNumber]) {
                numberPrime.push(unitNumber);
                isCheck[i] = false;
            }
        }
    }
    return numberPrime;
}

console.log(changeANumericCharater(1033));