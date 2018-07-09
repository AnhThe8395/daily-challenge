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
describe('Test Daily 6', () => {
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
})
