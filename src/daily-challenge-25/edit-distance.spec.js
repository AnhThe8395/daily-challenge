import { editDistance } from './edit-distance.dynamic';

describe('Test Function editDistance of Dynamic Programming', () => {
    describe('Test case: Input Validate', () => {
        it(`WordsA: abc & WordsB: def. Result: 3`, () => {
            const rs = editDistance('abc', 'def');
            expect(rs).toEqual(3);
        });
        it(`WordsA: Anshuman & WordsB: Antihuman. Result: 2`, () => {
            const rs = editDistance('Anshuman', 'Antihuman');
            expect(rs).toEqual(2);
        })
    });
    describe('Test case: Input InValidate', () => {
        it(`Make color :)`, () => {
            expect(true).toEqual(true);
        })
    })
})