import {
    implementStr
} from './implement-strStrQSBC';
import {
    KMPSearch
} from './implement-strStrKMP';

describe('Implement StrStr', () => {
    it('should return 1', () => {
        let rs = KMPSearch('AABBACAADAABAABA', 'AABA');
        expect(rs).toEqual(9);
    });
    it('should return 2', () => {
        let rs = KMPSearch('bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba', 'babaaa');
        expect(rs).toEqual(48);
    });
    it('should return 3', () => {
        let rs = KMPSearch('aabaaaababaabbbabbabbbaabababaaaaaababaaabbabbabbabbaaaabbbbbbaabbabbbbbabababbaaabbaabbbababbb', 'bba');
        expect(rs).toEqual(13);
    });
    it('should return 4', () => {
        let rs = KMPSearch('a', 'bba');
        expect(rs).toEqual(-1);
    })
})