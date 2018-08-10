const zigzag = (strings, n) => {
    let count = 0, direction = true;
    let arrayAS = [];
    if (n == 1) return strings;
    for (const i in strings) {
        arrayAS[i] = {
            index: count,
            value: strings[i]
        };
        if (direction) {
            count++;
        } else {
            count--;
        }
        if (count === 0) direction = true;
        if (count === n - 1) direction = false;
    }
    let result = '';
    for (let i = 0; i < n; i++) {
        result += arrayAS.filter(({ index }) => index == i).map(({ value }) => value).join('');
    }
    return result;
}

export {
    zigzag
}