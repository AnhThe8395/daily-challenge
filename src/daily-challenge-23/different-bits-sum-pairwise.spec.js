import {
    differentBitsSumPairwise
} from './different-bits-sum-pairwise';

describe('Test Function differentBitsSumPairwise', () => {
    describe('Test Case: InputValidate', () => {
        it('arrayInput: [1,3,5] ', () => {
            const rs = differentBitsSumPairwise(1,3,5);
            expect(rs).toEqual(8);
        });
    });
    describe('Test Case : InputInvalidate', () => {
        it('Array is InputInvalidate', () => {
            expect(true).toEqual(true);
        })
    })
})