const binarySearch = (start, end, condition) => {
    while (start < end) {
        const mid = Math.floor((start + end + 1) / 2);
        if (condition(mid)) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    return start;
}

const squareRoot = target => {
    return binarySearch(0, target, value => value * value > target);
}
export {
    squareRoot
}