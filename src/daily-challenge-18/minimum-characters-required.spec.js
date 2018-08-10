import { minimumCharactersRequired }
    from './minimum-characters-required';

describe('Minimum-Characters-Required', () => {
    describe('should return', () => {
        it('should return 1', () => {
            const rs = minimumCharactersRequired('ABC');
            expect(2).toEqual(rs);
        });
        it('should return 2', () => {
            const rs = minimumCharactersRequired('AACECAAAA');
            expect(2).toEqual(rs);
        })
    })
})