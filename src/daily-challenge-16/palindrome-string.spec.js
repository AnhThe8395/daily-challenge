import {
    checkPalindromeString
} from './palindrome-string';

describe('Palindrome String', () => {
    it('should return 1', () => {
        let rs = checkPalindromeString('A man, a plan, a canal: Panama');
        expect(rs).toEqual(1);
    });
    it('should return 2', () => {
        let rs = checkPalindromeString('race a car');
        expect(rs).toEqual(0);
    })
})