const countElement = (start, end, value, array) => {
    if (start > end) return 0;
    const position = Math.floor((start + end + 1) / 2);
    if (array[position] === value)
        return 1 + countElement(start, position - 1, value, array) +
            countElement(position + 1, end, value, array)
    else if (array[position] < value) return countElement(position + 1, end, value, array);
    return countElement(start, position - 1, value, array)
}
const findIndexofCondition = (array, condition) => {
    let start = 0, end = array.length;
    while (start < end) {
        const position = Math.floor((start + end + 1) / 2);
        if (condition(array[position])) {
            end = position - 1;
        } else {
            start = position + 1;
        }
    }
    return start;
}
const countElementOccurence2 = (array, target) => {
    const start = findIndexofCondition(array, value => value >= target);
    const end = findIndexofCondition(array, value => value > target);;
    return end - start;
}
const countElementOccurence = (array, value) => {
    return countElement(0, array.length, value, array);
}
export {
    countElementOccurence2,
    countElementOccurence
}