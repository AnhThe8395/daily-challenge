const gridUniquePaths = (a, b) => {
    let result = 0;
    function runRoad(point, n, x) {
        for (let i = 0; i < 2; i++) {
            x[point] = i;
            if (point === n - 1) {
                if (x.filter(item => item).length === (a - 1)) result++;
            } else runRoad(point + 1, n, x)
        }
    }
    runRoad(0, a - 1 + b - 1, []);
    return result;
}

export {
    gridUniquePaths
}