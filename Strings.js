function solution(str) {
    if (str.length === 0) return [];
    return str.match(/.{1,2}/g).map(pair => (pair + '_').slice(0, 2));
}


console.log(solution('abc'));    
console.log(solution('abcdef')); 
console.log(solution('abcde')); 
console.log(solution(''));    