const antiDiagonals = matrix => {
    const length = matrix.length;
    let diagonalMaTrix = [];
    for (let i = 0; i < length * 2 - 1; i++) {
        diagonalMaTrix[i] = [];
        for (let j = 0; j < length; j++)
            if (i - j >= 0 && i - j < length) {
                diagonalMaTrix[i].push(matrix[j][i - j]);
            }
    }
    return diagonalMaTrix;
}
const antiDiagonals2 = matrix => {
    const length = matrix.length;
    let diagonalMaTrix = [];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (!diagonalMaTrix[i + j]) diagonalMaTrix[i + j] = [];
            diagonalMaTrix[i + j].push(matrix[i][j]);
        }
    }
    return diagonalMaTrix;
}
const rotateMatrix = matrix => {
    const length = matrix.length;
    let rotateMatrix = [];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (!rotateMatrix[j]) rotateMatrix[j] = [];
            rotateMatrix[j][length - i - 1] = matrix[i][j];
        }
    }
    return rotateMatrix;
}

const rotateMatrix2 = matrix => {
    const length = matrix.length;
    for (let i = 0; i < length / 2; i++) {
        for (let j = i; j < length - 1 - i; j++) {
            let temp = matrix[j][length - 1 - i];
            matrix[j][length - 1 - i] = matrix[i][j];
            let temp2 = matrix[length - 1 - i][length - 1 - j];
            matrix[length - 1 - i][length - 1 - j] = temp;
            let temp3 = matrix[length - 1 - j][i];
            matrix[length - 1 - j][i] = temp2;
            matrix[i][j] = temp3;
        }
    }
    return matrix;
}
describe('Test Daily 6', () => {
    describe('Test AntiDiagonals', () => {
        it('should return', done => {
            const rs = antiDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
            expect(rs).toEqual([[1], [2, 4], [3, 5, 7], [6, 8], [9]]);
            done();
        });
        it('should return 2', done => {
            const rs = antiDiagonals2([[1, 2], [3, 4]]);
            expect(rs).toEqual([[1], [2, 3], [4]]);
            done();
        });
    });
    describe('Test Rotate Matrix', () => {
        it('should return', done => {
            const rs = rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
            expect(rs).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
            done();
        });
        it('should return2 ', done => {
            const rs = rotateMatrix2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
            expect(rs).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
            done();
        })
    })
})
