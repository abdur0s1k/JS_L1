function toWeirdCase(string) {
    return string.split(' ').map(word => 
        [...word].map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
    ).join(' ');
}


console.log(toWeirdCase("String")); 
console.log(toWeirdCase("Weird string case")); 
