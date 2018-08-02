import {
    calculatedTimeMin
} from './time-paint-board';

describe('Time Paint Board', () => {
    it('should return 1', done => {
        const timeRs = calculatedTimeMin(2, 5, [1, 10]);
        expect(timeRs).toEqual(50);
        done();
    });
    it('should return 2', done => {
        const timeRs = calculatedTimeMin(2, 3, [4, 2, 5, 1, 3]);
        expect(timeRs).toEqual(27);
        done();
    });
    it('should return 3', done => {
        const timeRs = calculatedTimeMin(1, 1000000, [1000000, 1000000]);
        expect(timeRs).toEqual(9400003);
        done();
    });
})