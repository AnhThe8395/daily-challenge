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
const binarySearch2 = (start, end, condition, target) => {
    while (start < end) {
        const mid = Math.floor((start + end + 1) / 2);
        if (condition(mid * mid, target)) {
            end = mid - 1;
        } else if (condition(target, mid * mid)) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return start;
}

const squareRoot = target => {
    return binarySearch(0, target, value => value * value > target);
}
const squareRoot2 = target => {
    return binarySearch2(0, target, (value, target) => value > target, target);
}
export {
    squareRoot,
    squareRoot2
}