import { countAndSaySequence } from './count-and-say-sequence';

describe('Test Function Count And Say Sequence', () => {
    describe('Test case: Success', () => {
        it('Should Return 1: ', () =>
         {
            const rs = countAndSaySequence(2);
            expect(rs).toEqual('11');
        });
        it('Should Return 2: ', () => {
            const rs = countAndSaySequence(10);
            expect(rs).toEqual('13211311123113112211');
        })
    })
})