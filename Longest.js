function longest(arr, n) {
    const sortedArr = arr
        .map((str, index) => ({ str, index }))
        .sort((a, b) => {
            const lengthDiff = b.str.length - a.str.length;
            return lengthDiff !== 0 ? lengthDiff : a.index - b.index;
        })
        .map(obj => obj.str);

    return sortedArr[n - 1];
}


console.log(longest(["Hello", "World", "Codewars", "Katas"], 3)); 
console.log(longest(["apple", "banana", "kiwi", "grape"], 2));  
console.log(longest(["a", "ab", "abc", "abcd"], 1));             
console.log(longest(["one", "two", "three", "four"], 4));       
console.log(longest(["aa", "bb", "cc", "ff", "gg"], 3));        
