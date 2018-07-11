const wareArray = array => {
    array.sort((a, b) => a > b);
    const length = array.length;
    for (let i = 0; i < length - 1; i = i + 2) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    return array;
}
export {
    wareArray
}