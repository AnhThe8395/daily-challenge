const createSequence = sequence => {
    let length = sequence.length;
    let rs = '';
    let element = { value: sequence[0], count: 1 }
    for (let i = 1; i < length; i++) {
        const { value } = element;
        if (value === sequence[i]) {
            element.count += 1;
        } else {
            rs += `${element.count}${element.value}`;
            element.value = sequence[i];
            element.count = 1;
        }
    }
    return rs + `${element.count}${element.value}`;
}
const countAndSaySequence = (n) => {
    if (n === 1) return '1';
    else return createSequence(countAndSaySequence(n - 1));
}
export {
    countAndSaySequence
}