const countWaysToDecode = (decode, n) => {
    if (n === 0 || n === 1) return 1;
    let count = 0;
    if (decode[n - 1] > '0') {
        count = countWaysToDecode(decode, n - 1);
    }
    if (decode[n - 2] == '1' || (decode[n - 2] == '2' && decode[n - 1] < '7'))
        count += countWaysToDecode(decode, n - 2);
    return count;
}

const waysToDecode = decode => {
    const length = decode.length;
    return countWaysToDecode(decode, length);
}

export {
    waysToDecode
}