function whatCentury(year) {
    let century = Math.ceil(year / 100);
    let suffixes = {1: "st", 2: "nd", 3: "rd"};
    let suffix = suffixes[century % 10] && ![11, 12, 13].includes(century % 100) ? suffixes[century % 10] : "th";
    return `${century}${suffix}`;
}


console.log(whatCentury("1999")); 
console.log(whatCentury("2011")); 
console.log(whatCentury("2154")); 
console.log(whatCentury("2259")); 
console.log(whatCentury("1124")); 
console.log(whatCentury("2000")); 
