const countElement = (start, end, value, array) => {
    if (start > end) return 0;
    const position = Math.floor((start + end + 1) / 2);
    if (array[position] === value)
        return 1 + countElement(start, position - 1, value, array) +
            countElement(position + 1, end, value, array)
    else if (array[position] < value) return countElement(position + 1, end, value, array);
    return countElement(start, position - 1, value, array)
}
const countElementOccurence = (array, value) => {
    return countElement(0, array.length, value, array);
}

export {
    countElementOccurence
}
