const fs = require('fs');

/*fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err,data)    //err is error in file and data is the content
})  //the function to print data and err will run after the reading of the file is done*/

//console.log("Hue Hue")  //this will be printed before file content(data) because nodejs is non-blocking/asynchronus and reading of file takes time
a  = fs.readFileSync('file.txt');   //this is synchronus
console.log(a.toString())   //to print the content as a string
console.log("second")   //will print after


// fs.writeFile('file2.txt',"Sumant is god",()=>{   //creates a new file and writes if file is not present
//     console.log("written")
// })
b=fs.writeFileSync('file2.txt',"This is god")  //synchronus 
console.log("hue hue")
console.log(b)


//learn more at https://nodejs.org/api/fs.html