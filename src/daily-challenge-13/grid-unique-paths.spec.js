import {
    gridUniquePaths,
    gridUniquePaths2,
    gridUniquePaths3,
    gridUniquePaths4
} from './grid-unique-paths';

describe('Grid Unique Paths', () => {
    it('should return 1', done => {
        const rs = gridUniquePaths4(2, 2);
        expect(rs).toBe(2);
        done();
    });
    it('should return 2', done => {
        const rs = gridUniquePaths4(4, 4);
        expect(rs).toBe(20);
        done();
    });
    it('should return 3', done => {
        const rs = gridUniquePaths4(15, 9);
        expect(rs).toBe(319770);
        done();
    });
})