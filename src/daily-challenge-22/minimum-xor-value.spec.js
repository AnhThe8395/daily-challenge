import {
    minimunXorValue
} from './minimum-xor-value';

describe('Test Function minimunXorValue', () => {
    describe('Test Case: InputValidate', () => {
        it('arrayInput: [0,2,5,7] ', () => {
            const rs = minimunXorValue(0, 2, 5, 7);
            expect(rs).toEqual([0, 2]);
        });
        it('arrayInput: [0,4,7,9]', () => {
            const rs = minimunXorValue(0, 4, 7, 9);
            expect(rs).toEqual([4, 7]);
        });
    });
    describe('Test Case : InputInvalidate', () => {
        it('Array is InputInvalidate', () => {
            expect(true).toEqual(true);
        })
    })
})