import fs from 'fs';

const linkFile1 = './src/daily-challenge/promise-all/content1.json';
const linkFile2 = './src/daily-challenge/promise-all/content2.json';
const linkFile3 = './src/daily-challenge/promise-all/content3.json';

const readFilePromise = fileName =>
    new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
const writeFilePromise = (fileName, dataInput) =>
    new Promise((resolve, reject) => {
        fs.writeFile(fileName, dataInput, 'utf8', err => {
            if (err) reject(err);
            resolve('The file was saved!');
        })
    })
const readFile1 = readFilePromise(linkFile1);
const readFile2 = readFilePromise(linkFile2);

Promise.all([readFile1, readFile2])
    .then(([data1, data2]) => {
        let dataInput = JSON.parse(data1);
        const data3 = JSON.parse(data2).map(item =>
            item.type === dataInput.type ? dataInput : item);
        return writeFilePromise(linkFile3, JSON.stringify(data3));
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))