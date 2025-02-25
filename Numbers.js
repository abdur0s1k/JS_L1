function primeFactors(n) {
    const factors = {};
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors[i] = (factors[i] || 0) + 1;
            n /= i;
        }
    }
    
    if (n > 1) factors[n] = (factors[n] || 0) + 1;

    return Object.entries(factors)
        .map(([prime, count]) => count === 1 ? `(${prime})` : `(${prime}**${count})`)
        .join('');
}


console.log(primeFactors(86240)); 
