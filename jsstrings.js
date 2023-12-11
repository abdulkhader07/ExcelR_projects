let firstName='Syed'
let LastName=new String('sharma')
console.log(firstName.length)
console.log(lastName.length)



let longString='We are learing strings in javascript and javascript'
console.log(longString.slice(3,7))
console.log(longString.substring(6,10))

let partofString=longString.replace('javascript','Java')
console.log(partofString)

let partofofstring=longString.replaceAll('javascript','Java')
console.log(partofofstring)

let upperString=longString.toUpperCase()
console.log(upperString.toLowerCase())

let anotherString=' Hello'
console.log(longString.concat(anotherString))
//console.log(longString.trim())

console.log(longString.indexOf('j'))
console.log(longString.lastIndexOf('a'))

console.log(longString.charAt(20))
console.log(longString.startsWith('m'))
console.log(longString.endsWith('t'))

console.log(longString.includes('are'))

console.log(anotherString.repeat(3))
console.log(anotherString.split(''))




//---------------------------------------
// Strings are immutable

anotherstring[1]='p'
console.log(anotherstring)


//------------------------------------------


let str2 = "How are you"
str2 = "hello" + str2[1]
console.log(str2)










