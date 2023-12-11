// let numberOne=20
// let numberTwo=10

// try{
//     let result=numberOne/numberTwo

//     console.log('the result is '+result)
// }
// catch(err)
// {
//     console.log('the problem is '+err)
// }
// finally
// {
//     console.log('hello from finally')
// }
// console.log('this code is without exception handling')


//-------------------------------------------------------------

class CustomError extends Error
{
    constructor(message)
    {
        super(message)
    }
}

try
{
    let value=10

    throw new CustomError('hey this is custom error created by user')
    console.log(value)
}
catch(err)
{
    console.log(err.message)
}