import fs from 'fs';

let roadReadFile = '1024';

const readFileLoop = (nameFile) => {
    return new Promise(() => {
        fs.readFile(`src/numfiles/${nameFile}`, 'utf8', (err, data) => {
            if (err) { console.log(roadReadFile); return; };
            const nameNextFile = data.split(' ')[5];
            roadReadFile += `-> ${nameNextFile}`;
            readFileLoop(nameNextFile);
        })
    });
}

const ex1Matrix = (n) => {
    let x = 0, y = 0, r = 1;
    let u = n - 1, v = n - 1;
    let matrix = new Array();
    for (let i = 0; i < n; i++)matrix[i] = new Array();
    while (r <= n * n) {
        for (let i = x; i <= u; i++) {
            matrix[y][i] = r; r++;
        }
        y++;
        for (let i = y; i <= v; i++) {
            matrix[i][u] = r; r++;
        }
        u--;
        for (let i = u; i >= x; i--) {
            matrix[v][i] = r; r++;
        }
        v--;
        for (let i = v; i >= y; i--) {
            matrix[i][x] = r; r++;
        }
        x++;
    }
    return matrix;
}
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

const matrixTri = pascalTriangle(7);
console.log(matrixTri);