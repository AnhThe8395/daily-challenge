import { powerOfTwoIntegers } from './power-of-two-integers';

describe('Trailing Zeros in Factorial', () => {
    it('should return 1', done => {
        const rs = powerOfTwoIntegers(4);
        expect(rs).toEqual(true);
        done();
    })
    it('should return 2', done => {
        const rs = powerOfTwoIntegers(8);
        expect(rs).toEqual(true);
        done();
    })
    it('should return 3', done => {
        const rs = powerOfTwoIntegers(11);
        expect(rs).toEqual(false);
        done();
    })
    it('should return 4', done => {
        const rs = powerOfTwoIntegers(50074);
        expect(rs).toEqual(false);
        done();
    })
})