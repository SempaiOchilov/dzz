




























let str ='aaa@bbb@ccc'

console.log(str.split('aaa@bbb@ccc').join('aaa!bbb!ccc'))

console.log(str.split('aaa@bbb@ccc').join('Hello World'))

str = 'Hello, it is HTML';

console.log(str.split('HTML').join('not JS'))

let name = 'alex';
let correctName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();

console.log(correctName)

let word = `Math,random()`

console.log(word.split(',').join(''))

let lLuter = `Lex Luter has a big suit`

console.log(lLuter.split('Lex Luter has a big suit').join('ALex'))




//let str  =  'aaa@bbb@ccc'  
// заменить @ на !
//Cделать из let str = "HELLOWORLD" 
// "Hello world"