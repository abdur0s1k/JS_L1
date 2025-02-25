function domainName(url) {
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/\.]+)/);
    return match ? match[1] : '';
}


console.log(domainName("http://github.com/carbonfive/raygun")); 
console.log(domainName("http://www.zombie-bites.com"));         
console.log(domainName("https://www.cnet.com"));                
console.log(domainName("ftp://example.com/test"));              
console.log(domainName("http://subdomain.example.co.uk/path"));  
