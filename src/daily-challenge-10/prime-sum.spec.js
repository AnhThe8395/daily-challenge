import { primeSum } from './prime-sum';

describe('Prime Sum', () => {
    it('should return', done => {
        const rs = primeSum(1000000);
        expect(rs).toEqual([17, 999983]);
        done();
    }),
    it('should return 2', done => {
        const rs = primeSum(4);
        expect(rs).toEqual([2, 2]);
        done();
    })
})