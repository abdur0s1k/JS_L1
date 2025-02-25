function ipv4Parser(ip, mask) {
    let ipOctets = ip.split('.').map(Number);
    let maskOctets = mask.split('.').map(Number);
    
    let network = ipOctets.map((octet, i) => octet & maskOctets[i]).join('.');
    let host = ipOctets.map((octet, i) => octet & ~maskOctets[i] & 0xFF).join('.');
    
    return [network, host];
}


console.log(ipv4Parser("192.168.2.1", "255.255.255.0"));
