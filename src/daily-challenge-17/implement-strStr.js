const preQsBc = (strings) => {
    let qsBc = [];
    const length = strings.length;
    for (let i = 0; i < 127; i++) {
        qsBc[i] = length + 1;
    }
    for (let i = 0; i < strings.length; i++) {
        const charCode = strings.charCodeAt(i);
        qsBc[charCode] = length - i;
    }
    return qsBc;
}
const implementStr = (strings, substring) => {
    const qsBc = preQsBc(substring);
    let index = 0;
    const substringLength = substring.length;
    const lengthStrings = strings.length - substringLength;
    while (index <= lengthStrings) {
        if (substring === strings.slice(index, index + substringLength)) return index;
        const charCode = strings.charCodeAt(index + substringLength);
        index += qsBc[charCode];
    }
    return -1;
}

export {
    implementStr
}