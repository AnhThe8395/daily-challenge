const sum = matrix => {
    matrix.push(0);
    let matrixRs = [];
    const leng = matrix.length;
    for (let i = 0; i < leng; i++) {
        matrixRs[i] = matrix[i] + matrix[leng - i - 1];
    }
    matrix.pop();
    return matrixRs;
}
const pascalTriangle = n => {
    let matrix = new Array();
    for (let i = 0; i < n; i++)matrix[i] = new Array();
    matrix[0] = [1];
    for (let i = 1; i < n; i++) {
        matrix[i] = sum(matrix[i - 1]);
    }
    return matrix;
}

console.log(pascalTriangle(7));