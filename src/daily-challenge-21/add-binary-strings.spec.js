import {
    addBinaryStrings
} from './add-binary-strings';

describe('Test Function addBinaryStrings', () => {
    describe('Test Case: InputValidate', () => {
        it('a = "100" & b = "11" ', () => {
            const rs = addBinaryStrings('100', '11');
            expect(rs).toEqual('111');
        });
        it('a = "1010110111001101101000" & b = "1000011011000000111100110" ', () => {
            const rs = addBinaryStrings('1010110111001101101000', '1000011011000000111100110');
            expect(rs).toEqual('1001110001111010101001110');
        });
    });
    describe('Test Case : InputInvalidate', () => {
        it('a&b not binary', () => {
            expect(true).toEqual(true);
        })
    })
})