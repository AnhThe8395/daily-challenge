const maxSumContiguousSub = array => {
    let max = array[0], dau = 0, cuoi = 0, n = array.length, sum = array[0], temp = 0;
    for (let i = 1; i < n; i++) {
        sum += array[i];
        if (sum >= max) {
            max = sum;
            cuoi = i;
            dau = temp;
        }
        else if (sum < 0) {
            temp = i + 1;
            sum = 0;
        }
    }
    return array.slice(dau, cuoi + 1);
}

export {
    maxSumContiguousSub
}