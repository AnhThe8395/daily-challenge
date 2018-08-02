import {
    calculatedBookMin
} from './list-of-books';

describe('List of Books', () => {
    it('should return 1', done => {
        const timeRs = calculatedBookMin(2, [12, 34, 67, 90]);
        expect(timeRs).toEqual(113);
        done();
    });
    it('should return 2', done => {
        const timeRs = calculatedBookMin(26, [97, 26, 12, 67, 10, 33, 79, 49, 79, 21, 67, 72, 93, 36, 85, 45, 28, 91, 94, 57, 1, 53, 8, 44, 68, 90, 24]);
        expect(timeRs).toEqual(97);
        done();
    });
})