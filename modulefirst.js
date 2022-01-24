//const simple = require ("./modulesecond.mjs") normal import

// import {simple} from "./modulesecond.mjs"   //es6 import
// simple()
// import {simple2} from "./modulesecond.mjs"   //es6 import
// simple2()
import {simple2 as simple} from "./modulesecond.mjs"   //es6 import, in this file we will write simple(name) but the fuction is simple2 from modulesecond
simple()

//import huehue from "./modulesecond.mjs"   the huehue() will be simple2 as it is default

//import {simple2,simple} from "./modulesecond.mjs"   //multiple imports

import * as a2 from "./modulesecond.mjs"     //to imoprt all functions
console.log(a2)










//"type": "module", add in package.json