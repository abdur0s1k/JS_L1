function wave(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
        }
    }
    return result;
}


console.log(wave("hello")); 
console.log(wave(" gap ")); 
