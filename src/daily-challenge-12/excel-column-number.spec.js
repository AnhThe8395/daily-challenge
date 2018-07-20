import { excelColumnNumber } from './excel-column-number';

describe('Excel Column Number', () => {
    it('should return 1', done => {
        const rs = excelColumnNumber(1);
        expect(rs).toEqual('A');
        done();
    });
    it('should return 2', done => {
        const rs = excelColumnNumber(26);
        expect(rs).toEqual('Z');
        done();
    });
    it('should return 3', done => {
        const rs = excelColumnNumber(27);
        expect(rs).toEqual('AA');
        done();
    });
    it('should return 4', done => {
        const rs = excelColumnNumber(18279);
        expect(rs).toEqual('AAAA');
        done();
    })
})