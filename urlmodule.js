import url from 'url';
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)  //outputs everything
console.log(myURL.href)  //output https://example.org/a/b/c?d=e#fgh   full url



//read more at https://nodejs.org/api/url.html