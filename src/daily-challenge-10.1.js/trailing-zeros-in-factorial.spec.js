import { trailingZerosinFactorial } from './trailing-zeros-in-factorial';

describe('Trailing Zeros in Factorial', () => {
    it('should return', done => {
        const rs = trailingZerosinFactorial(123456789);
        expect(rs).toEqual(30864192);
        done();
    }),
        it('should return 2', done => {
            const rs = trailingZerosinFactorial(100);
            expect(rs).toEqual(24);
            done();
        })
})