const reverseTheString = (strings) => {
    const reverseString = [];
    const length = strings.length;
    let elementString = '';
    for (let i = 0; i < length; i++) {
        if (strings[i] === ' ' && elementString !== '') {
            reverseString.push(elementString);
            elementString = '';
        } else if (strings[i] !== ' ') {
            elementString += strings[i];
        }
    }
    if (elementString !== '') reverseString.push(elementString);
    return reverseString.reverse().join(' ');
}

export {
    reverseTheString
}