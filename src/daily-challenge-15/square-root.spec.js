import {
    squareRoot,
} from './square-root';

describe('Square Root', () => {
    it('should return 1', done => {
        const rs = squareRoot(8);
        expect(rs).toBe(2);
        done();
    });
    it('should return 1', done => {
        const rs = squareRoot(16);
        expect(rs).toBe(4);
        done();
    });
    it('should return 1', done => {
        const rs = squareRoot(35);
        expect(rs).toBe(5);
        done();
    });
})
