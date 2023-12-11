let numArray=[1,2,3,4]
let stringArray=new Array('Hello','Hi','Bye')
let valueArray=Array.of(5,6,7,8,9)
console.log(typeof(stringArray))

console.log(valueArray[0])


for (const iterator of valueArray){
    console.log(iterator)
}

console.log(stringArray[stringArray.length-1])


numArray.forEach(item,index,ar=>{console.log(item,index)})


let sum=0
numArray.forEach(summation)
function summation(item)
{
    sum=sum+item
}
console.log(sum)



//stringArray.push('javascript')

stringArray.unshift('java')
for (const iterator of stringArray){
    console.log(iterator)

}


//-------------------------------------------


console.log(stringArray.pop())
for (const iterator of stringArray){
    console.log(iterator)
}


//----------------------------------------------
let numArray2=numArray.slice(1,2)
for (const iterator of numArray){
    console.log(iterator)
}


let thirdArray=numArray.concat(valueArray)
for (const iterator of thirdArray){
    console.log(iterator)
}

//----------------------------------------------------
let numberArray=[6,2,8,9,5,7]
numberArray.sort()
//numberArray.reverse()
//numberArray.splice(3,0,10,11,12)
for (const iterator of numberArray){
    console.log(iterator)
}

//------------------------------------------------------

let mapArray=numArray.map(multiplicationByTen)
//let filterArray=numberArray.filter(multiplicationByTen)
function multiplicationByTen(value)
{
    return value*10
}
console.log(mapArray)

//-----------------------------------------

let sumArray=numArray.reduce(summation)
function summation(toatal,item)
{
    return total+item
}
console.log(sumArray)

//--------------------------------------------
//let filterArray=numberArray.filter(greaterThan6)
let findArray=numberArray.find(greaterThan6)
function greaterThan6(value)
{
    return value>6
}

//-----------------------------------------
