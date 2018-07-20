const referenceColumn = [
    'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
]

const excelColumnNumber = n => {
    let titleColumn = [];
    while (n > 1) {
        titleColumn.push(referenceColumn[n % 26]);
        n = n % 26 === 0 ? Math.floor(n / 26) - 1 : Math.floor(n / 26);
    }
    if (n !== 0) titleColumn.push(referenceColumn[n]);
    return titleColumn.reverse().join('');
}

export {
    excelColumnNumber
}