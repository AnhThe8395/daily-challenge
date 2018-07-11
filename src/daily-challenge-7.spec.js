const mergeOverlappingIntervals = matrix => {
    matrix.sort((a, b) => a[0] > b[0]);
    let matrixRs = [];
    const length = matrix.length;
    matrixRs.push(matrix[0]);
    for (let i = 1; i < length; i++) {
        const length = matrixRs.length
        if (matrix[i][0] >= matrixRs[length - 1][1]) matrixRs.push(matrix[i]);
        else if (matrix[i][1] > matrixRs[length - 1][1]) matrixRs[length - 1][1] = matrix[i][1];
    }
    return matrixRs;
}
describe("Merge Overlapping Intervals", () => {
    it('should return', done => {
        const rs = mergeOverlappingIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
        expect(rs).toEqual([[1, 6], [8, 10], [15, 18]]);
        done();
    })
})
