import {
    squareRoot,
    squareRoot2
} from './square-root';

describe('Square Root', () => {
    it('should return 1', done => {
        const rs = squareRoot2(5);
        expect(rs).toBe(2);
        done();
    });
    it('should return 1', done => {
        const rs = squareRoot2(16);
        expect(rs).toBe(4);
        done();
    });
    it('should return 1', done => {
        const rs = squareRoot2(35);
        expect(rs).toBe(5);
        done();
    });
})
