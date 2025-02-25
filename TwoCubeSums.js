function hasTwoCubeSums(n) {
    let sums = new Map();
    
    for (let a = 1; a ** 3 < n; a++) {
        for (let b = a + 1; a ** 3 + b ** 3 <= n; b++) {
            let sum = a ** 3 + b ** 3;
            
            if (sum === n && sums.has(sum)) return true;
            sums.set(sum, [a, b]);
        }
    }
    return false;
}

module.exports = hasTwoCubeSums;


if (require.main === module) {
    console.log(hasTwoDifferentCubeSums(1729)); 
    console.log(hasTwoDifferentCubeSums(4104)); 
    console.log(hasTwoDifferentCubeSums(100)); 
}
