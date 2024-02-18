// Task - 1 

// let num1 = +prompt('Yaş')

// switch (true) {

//     case num1 <= 12:
//         alert('usaq')
//         break;
//     case num1 > 12 && num1 <= 18:
//         alert('yeniyetmə')
//         break;

//     case num1 > 18 && num1 <= 60:
//         alert('böyük')
//         break;

//     case num1 > 60:
//         alert('pensiyaçı')
//         break;
//     default:
//         alert('yalnis')
//         break;
// }


// Task - 2



// let num1 = +prompt('Reqem 0-9 arasi')

// switch (num1) {
//     case 1:
//         alert('!')
//         break;

//     case 2:
//         alert('@')
//         break;

//     case 3:
//         alert('#')
//         break;

//     case 4:
//         alert('$')
//         break;

//     case 5:
//         alert('%')
//         break;

//     case 6:
//         alert('^')
//         break;

//     case 7:
//         alert('&')
//         break;

//     case 8:
//         alert('*')
//         break;

//     case 9:
//         alert('(')
//         break;

//     case 0:
//         alert(')')
//         break;

//     default:
//         alert('0-9 reqem arasi olmalidir')
//         break;
// }




// Task - 3


// let num1 = +prompt('Number')

// let first_number = num1 % 10;

// let second_number = ((num1 - first_number) % 100) / 10;

// let thirt = (num1 / 100) - ((num1 % 100) / 100);

// if (first_number == second_number){
//     alert('Eyni reqemden istifade olunub')
// }

// else if (first_number == thirt){
//     alert('Eyni reqemden istifade olunub')
// }

// else if (second_number == thirt){
//     alert('Eyni reqemden istifade olunub')
// }

// else if (first_number !== second_number){
//     alert('Eyni reqemden istifade olunmayib')
// }

// else if (first_number !== thirt){
//     alert('Eyni reqemden istifade olunmayib')
// }

// else if (second_number !== thirt){
//     alert('Eyni reqemden istifade olunmayib')
// }


// Task - 4

// let num1 = +prompt('Dogum ili')

// let num2 = num1 % 100 == 0 ? num1 % 400 == 0 : num1 % 4 == 0

// alert(num2)


// Task - 5


// let num1 = +prompt('number')

// let num2 = +prompt('number')

// let str = 0;

// for (let i = num1; i <= num2; i++) {
//     str += i;
// }

// alert(str)
// console.log(str)


// Task - 6

// let num1 = +prompt('number')

// for (let i = 1; i <= num1; i++) {

//     if (num1 % i == 0) {
//         alert(i)
//         console.log(i)
//     }
// }


// Task - 7

// let num = prompt('Number')

// let count = ''

// for (let i = 1; i <= num.length; i++) {
//     count++
// }

// alert(count)


// Task - 8

// let sifir = 0
// let musbet = 0;
// let menfi = 0;

// for (let i = 1; i <= 10; i++) {

//     let num1 = +prompt('number')

//     if (num1 > 0) {
//         musbet++
//     }

//     else if (num1 < 0) {
//         menfi++
//     }

//     else{
//         sifir++
//     }

// }
// alert("Müsbət rəqəm:" + musbet + "\nMənfi rəqəm: " + menfi + "\nSıfır:" + sifir);