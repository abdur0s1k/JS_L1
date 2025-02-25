function hexStringToRGB(hexString) {
    const r = parseInt(hexString.slice(1, 3), 16);
    const g = parseInt(hexString.slice(3, 5), 16);
    const b = parseInt(hexString.slice(5, 7), 16);
    return { r, g, b };
}


console.log(hexStringToRGB("#FF9933")); 
console.log(hexStringToRGB("#ff9933")); 
