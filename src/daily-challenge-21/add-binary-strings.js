const addBinaryStrings = (binary1, binary2) => {
    const sumBinary = [];
    let numBinary1 = [...binary1], numBinary2 = [...binary2];
    let memory = 0;
    while (numBinary1.length !== 0 || numBinary2.length !== 0) {
        const num1 = Number.parseInt(numBinary1.pop()) ? 1 : 0;
        const num2 = Number.parseInt(numBinary2.pop()) ? 1 : 0;
        const sum = num1 + num2 + memory;
        switch (sum) {
            case 1:
                sumBinary.push(1);
                memory = 0;
                break;
            case 2:
                sumBinary.push(0);
                memory = 1;
                break;
            case 3:
                sumBinary.push(1);
                memory = 1;
                break;
            default:
                sumBinary.push(0);
                memory = 0;
                break;
        }
    }
    if (memory) sumBinary.push(memory);
    return sumBinary.reverse().join('');
}

export {
    addBinaryStrings
}