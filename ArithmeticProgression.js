function findMissing(sequence) {
    const n = sequence.length;
    const step = (sequence[n - 1] - sequence[0]) / n;

    for (let i = 0; i < n - 1; i++) {
        if (sequence[i] + step !== sequence[i + 1]) {
            return sequence[i] + step;
        }
    }
}


console.log(findMissing([1, 3, 5, 9, 11])); 