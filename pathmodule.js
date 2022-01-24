const path = require('path');
//path is C:\\temp\\myfile.html
console.log(path.basename('C:\\temp\\myfile.html'))   //outputs basename of this path which is myfile.html
console.log(path.dirname('C:\\temp\\myfile.html'))   //outputs basename of this path which is C:\temp
console.log(path.extname('index.html'))   //outputs extension in this case .html
console.log(path.extname(__filename))   //outputs extension of current file which is js
console.log(__filename)  //output c:\Users\Sumant Chaudhary\Desktop\Web Dev\Node Js Prac\pathmodule.js


//learn more at https://nodejs.org/api/path.html