import { waysToDecode } from './ways-to-decode';

describe('Test Function waysToDecode', () => {
    describe('Test Case: InputValidate', () => {
        it('valueInput: 32925665678138257423442343752148360796465852883409126159293254159974370974059818198867156827877059067081419274873853679038', () => {
            const rs = waysToDecode('32925665678138257423442343752148360796465852883409126159293254159974370974059818198867156827877059067081419274873853679038');
            expect(rs).toEqual(0);
        });
        it('valueInput: 1111111111', () => {
            const rs = waysToDecode('1111111111');
            expect(rs).toEqual(89);
        });
        it('valueInput: 2611055971756562', () => {
            const rs = waysToDecode('2611055971756562');
            expect(rs).toEqual(4);
        });
        it('valueInput: 12', () => {
            const rs = waysToDecode('12');
            expect(rs).toEqual(2);
        })
    });
    describe('Test Case : InputInvalidate', () => {
        it('Array is InputInvalidate', () => {
            expect(true).toEqual(true);
        })
    })
})