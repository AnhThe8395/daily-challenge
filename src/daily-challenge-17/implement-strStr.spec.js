import {
    implementStr
} from './implement-strStr';

describe('Implement StrStr', () => {
    it('should return 1', () => {
        let rs = implementStr('AABBACAADAABAABA','AABA');
        expect(rs).toEqual(9);
    });
    it('should return 2', () => {
        let rs = implementStr('bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba','babaaa');
        expect(rs).toEqual(48);
    });
    it('should return 3', () => {
        let rs = implementStr('aabaaaababaabbbabbabbbaabababaaaaaababaaabbabbabbabbaaaabbbbbbaabbabbbbbabababbaaabbaabbbababbb','bba');
        expect(rs).toEqual(13);
    })
})