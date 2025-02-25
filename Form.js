function expandedForm(num) {
    return String(num)
        .split('')
        .map((digit, index, arr) => digit !== '0' ? digit + '0'.repeat(arr.length - index - 1) : '')
        .filter(Boolean)
        .join(' + ');
}


console.log(expandedForm(12));     
console.log(expandedForm(45));    
console.log(expandedForm(70304)); 
