//--------------spread operator-------------

// let firstArrayValue=[2,3,8,9]
// let secondArrayValue=[1,5,6]
// console.log(math.max(...firstArrayValue,...secondArrayValue))


//-----------------rest operator-----------
function restOperatorUsage(name,...firstArrayValue)
{
    name='hello'
    console.log(name+' '+firstArrayValue[3])

}

restOperatorUsage('hi',1,2,3,4)


//-------------closure------------------
let valueOne=25

function clouseurDemo()
{
    let valueTwo=36
    function innerClosureDemo()
    {
        valueTwo+=2
        valueOne+=2
        valueThree=99
        console.log(valueOne)
        console.log(valueTwo)
        console.log(valueThree)
    }
    valueTwo++
    console.log(valueTwo)
    return innerClosureDemo;
}

closureDemo()
