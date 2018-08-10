import { zigzag } from './zigzag';

describe('Test String Zigzag', () => {
    describe('Test Success', () => {
        it('should return 1', () => {
            const rs = zigzag('PAYPALISHIRING', 3);
            expect(rs).toEqual('PAHNAPLSIIGYIR');
        });
        it('should return 2', () => {
            const rs = zigzag('ABCD', 2);
            expect(rs).toEqual('ACBD');
        })
    })
})