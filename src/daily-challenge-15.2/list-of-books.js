const countBook = (books, target) => {
    let count = 1;
    let sum = 0;
    for (let i of books) {
        if (sum + i > target) {
            sum = i;
            count++;
        } else sum += i;
    }
    return count;
}

const binarySearch = (start, end, books, condition) => {
    while (start <= end) {
        const mid = Math.floor((start + end + 1) / 2);
        const numBook = countBook(books, mid);
        if (condition(numBook)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
}

const calculatedBookMin = (students, books) => {
    const start = Math.max(...books);
    const end = books.reduce((a, b) => a + b);
    const minBook = binarySearch(start, end, books,   );
    return minBook;
}

export {
    calculatedBookMin
}