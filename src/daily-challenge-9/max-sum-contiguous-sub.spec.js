import { maxSumContiguousSub } from './max-sum-contiguous-sub';

describe('Ware Array', () => {
    it('should return', done => {
        const rs = maxSumContiguousSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
        expect(rs).toEqual([4, -1, 2, 1]);
        done();
    })
})