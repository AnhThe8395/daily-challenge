const booking = (arrivals, departures, k) => {
    const length = departures.length;
    let checkRoom = [];
    for (let i = 0; i < length; i++) {
        checkRoom[i] = {
            arrivals: arrivals[i],
            departures: departures[i]
        }
    }
    checkRoom.sort((a, b) => b.departures < a.departures);

    for (let i = 0; i < length - 1; i++) {
        if (checkRoom[i].departures > checkRoom[i + 1].arrivals) k--;
    }
    if (k <= 0) return false;
    return true;
}
describe('Test Daily 6', () => {
    it('should return 1', done => {
        const rs = booking([1, 2, 3, 4], [10, 2, 6, 14], 4);
        expect(rs).toEqual(true);
        done();
    });
    it('should return 2', done => {
        const rs = booking([1, 3, 5], [2, 6, 8], 1);
        expect(rs).toEqual(false);
        done();
    })
})
