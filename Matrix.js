const ex1Matrix = (n) => {
    let x = 0, y = 0, r = 1;
    let u = n - 1, v = n - 1;
    let matrix = new Array();
    for (let i = 0; i < n; i++)matrix[i] = new Array();
    while (r <= n * n) {
        for (let i = x; i <= u; i++) {
            matrix[y][i] = r; r++;
        }
        y++;
        for (let i = y; i <= v; i++) {
            matrix[i][u] = r; r++;
        }
        u--;
        for (let i = u; i >= x; i--) {
            matrix[v][i] = r; r++;
        }
        v--;
        for (let i = v; i >= y; i--) {
            matrix[i][x] = r; r++;
        }
        x++;
    }
    return matrix;
}

console.log(ex1Matrix(7));