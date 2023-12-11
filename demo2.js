// Arithematic operators

console.log(3+5)
firstValue=5
secondValue=6
result=firstValue+secondValue
console.log(result)

// increment and decrement 
postIncrement=6
console.log(postIncrement)
postincrement++
console.log(postIncrement)


++preincrement
console.log(preincrement)



// comparision operators
console.log(4>5)
console.log(4<5)
console.log(5<=5)
console.log(6==6)


thirdValue=8
fourthValue=7
console.log(thirdValue==fourthValue)

// rule for variabels
// if any one operand is string then other operand will be converted to string
// if any operand is number other will be converted to number 

// if any operand is boolean then other one will be a number like for true=1 , false=0

// if any operand is in object and other is primitive, object is converted to primitive firstValue

// if u have null or undefined as one operand then second operand must be null or undefined to get true otherwise it will be false


// logical operators

// AND
// T F F
// F T F
// F F F
// T T T

// OR
// T F T
// F T T
// T T T
// F F F


// NOT!
// !(T)=F 
// !(F)=T 

console.log(6<7&&7>9)    //AND condition 
console.log(6>7||7<9)    //OR condition 

console.log(!(6>8))


// Ternary operator
5>6?console.log('5 is less than 6:'):console.log('5 is not less than 6')


// assignment operators
// m+=10  ----> m=m+10
// m-=10  ----> m=m-10
// /y  /,*,%
// a<<=b ----> a=a<<b


// loop
let num3=8
let num4=6
let num5=2

if(num2>num4&&num3>num5)
{
 console.log("greatest is"+num3)
}
else if(num4>num3&&num4>num5)
{
    console.log("greatest is"+num4)
}
else
{
    console.log("Greatest is" +numberThree)
}

// -----------------------------------------------------------------

//switch case
let numberOne=2
let numberTwo=3
let choice=4
switch(choice)
{
    case 1:
        result=numberOne+numberTwo
        console.log("addition of two number is"+result)
        break;

    case 2:
        result=numberOne-numberTwo
        console.log("Subtraction of two number is"+result)
        break;

     case 3:
        result=numberOne*numberTwo
        console.log("product of two number is"+result)
        break;

    default:
        result=numberOne+numberTwo
        console.log("you have entered the wrong choice")
        break;

}




// loops
// 1. entry control loops for and while
// 2. exit control loops do-while
// ------entry control loops--------- 
// loops which come under this category will check the 
// condition first and then move to the loop Body

// syntax of for(initialization; condition;inc/dec)
// {
//     code
// }

//-------------------------------------------------


// syntax for while
// initialization 
// while(condition)
// {
//     code 
//     inc/dec
// }




// ------exit control loop--------
// it checks the condition at last 

// syntax for do-while
// initialization
// do{
//     code 
//     inc/dec 
// }while(condition)




// for loop usage
let fact=1;
for(let num=1;num=5;num++)
{
    fact=fact*num;
}
console.log(fact)

//for in
var studentAge={
    'ram':12,
    'shyam':15
}
for(let name in studentAge)
{
    console.log(studentAge[name])
}



//for-of loop
let numbers=[1,2,3,4,5]
for(let value of numbers)
{
    let result=value*10
    console.log(result)
}





//while-loop
let num=1
let sum=0
while(num<=10)
{
    sum=sum+num
    num++
}
console.log(`the sum of first 10 digit is ${sum}`)




//do-while
let nim=10
do{
    console.log(nim)
    nim--
}while(nim<0)




//typeof
let numb=10
console.log(typeof(numb))



