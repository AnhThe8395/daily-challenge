const minimunXorValue = (...array) => {
    let [a, b, ...arrayIntegers] = [...array.sort()];
    for (let i of arrayIntegers) {
        if ((i ^ b) < (b ^ a)) {
            [a, b] = [b, i];
        }
    }
    return [a, b];
}
export {
    minimunXorValue
}