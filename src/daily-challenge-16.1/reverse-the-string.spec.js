import {
    reverseTheString
} from './reverse-the-string';

describe('Reverse The String', () => {
    it('should return 1', () => {
        let rs = reverseTheString('the sky is blue');
        expect(rs).toEqual('blue is sky the');
    });
    it('should return 2', () => {
        let rs = reverseTheString('   blue            is          sky            the      ');
        expect(rs).toEqual('the sky is blue');
    })
})