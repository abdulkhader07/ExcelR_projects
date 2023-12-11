// const arrowFunctionDefaultParameter=(num1,num2,num3)=>
// {
//     let result=num1+num2+num3
//     console.log(result)
// }
// arrowFunctionDefaultParameter(6,4,5)



//------single line arrow functions-------

// const addTen=(a)=>console.log(a+10)
// addTen(5)


//---------IIFE------------------
// (funtion(){console.log('Hello from IIFE')})();
//----------IIfE with parameters--------
// (funtion(name)
// {
//     console.log('hello from IIFE' +name)

// })('shyam')


//----------generator function-----------
// function* names()
// {
//     yield 'Ram'
//     yield 'shyam'
//     yield 'sita'
// }

// let callGen=names()
// for(const item of callGen)
// console.log(callGen.next().value)
// console.log(callGen.next().value)
// console.log(callGen.next().value)


//yield*

const numberArray=[1,2,3,4]
funtion* names()
{
    yield 'ram'
    yield* numberArray
    yield 'shyam'
}
for(let item of names())
console.log(item)
