//nlogn
const countPainter = (boards, target) => {
    let count = 1;
    let sum = 0;
    for (let i of boards) {
        if (sum + i > target) {
            sum = i;
            count++;
        } else sum += i;
    }
    return count;
}
const binarySearch = (start, end, boards, condition) => {
    while (start <= end) {
        const mid = Math.floor((start + end + 1) / 2);
        const numPainter = countPainter(boards, mid);
        if (condition(numPainter)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
}

const calculatedTimeMin = (painters, time, boards) => {
    const start = Math.max(...boards);
    const end = boards.reduce((a, b) => a + b);
    const minWork = binarySearch(start, end, boards, item => item > painters);
    return minWork * time % 10000003;
}

export {
    calculatedTimeMin
}
