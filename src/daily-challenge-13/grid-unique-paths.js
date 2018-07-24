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
const recursionGridUnique = (a, b) => {
    if (a === 1 || b === 1) return 1;
    else return recursionGridUnique(a - 1, b) + recursionGridUnique(a, b - 1);
}
const gridUniquePaths2 = (a, b) => {
    const result = recursionGridUnique(a, b)
    return result;
}
const glosbe = a => {
    if (a === 1) return 1;
    else return a * glosbe(a - 1);
}
const gridUniquePaths3 = (a, b) => {
    return glosbe(a + b - 2) / (glosbe(a - 1) * (glosbe(b - 1)));
}
const gridUniquePaths4 = (a, b) => {
    let matrixRoad = [];
    for (let i = 0; i < a; i++) {
        matrixRoad[i] = [];
        for (let j = 0; j < b; j++) {
            if (i === 0 || j === 0) matrixRoad[i][j] = 1;
            else matrixRoad[i][j] = matrixRoad[i - 1][j] + matrixRoad[i][j - 1];
        }
    }
    return matrixRoad[a - 1][b - 1];
}
export {
    gridUniquePaths,
    gridUniquePaths2,
    gridUniquePaths3,
    gridUniquePaths4
}