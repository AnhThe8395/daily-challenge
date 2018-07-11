import { wareArray } from './ware-array';

describe('Ware Array', () => {
    it('should return', done => {
        const rs = wareArray([11, 8, 7, 9, 2, 10, 2]);
        expect(rs).toEqual([2, 2, 8, 7, 10, 9, 11]);
        done();
    })
})