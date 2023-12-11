// const elementWitnId=document.getElementById("demo").innerHTML='we are learning DOM manipulations in javascript';
// console.log(elementWitnId)

// const tagList=document.getElementsByName('p')
// console.log(tagList)


//-----------------------------------
// function changeText()
// {
//     document.getElementById('demo').innerHTML=('Hello')
// }


//------------------------------
// let element=document.createElement('div')
// element.innerHTML='<h2>Hello</h2 de4>'
// document.body.appendChild(element)

//----------------------------------
// let textOfList=document.getElementById('demo').textContent
// document.getElementById('demo').innerHTML=textOfList


//-----------------------------------------


// let divParent=document.querySelector('#container')
// let para=document.createElement('p')
// para.textContent='With create Element()'
// divParent.appendChild(para)

// let element=document.querySelector('#container')
// element.innerHTML+='<h2>Hello</h2>'

// let language=['java','javaScript','HTML','CSS']
// let parentDiv=Document.querySelector('#container')

// let domfragment1=new DocumentFragment()
// languages.forEach((lang)=>{
//     let list=document.createElement('l1')
//     list.innerHTML=lang
//     domfragment1.appendChild(list)


// })
// parentDiv.appendChild(domfragment1)


// let olList=document.querySelector('ol')
// let languages=['java','javaScript','HTML','CSS']

// let items=languages.map(value)=>{
//     let list=document.createElement('li')
//     list

// }


//-----------------------------------------------

// let buttonType=document.querySelector('#btn')
// if(buttonType)
// {
//     buttonType.setAttribute('name','click')
//     buttonType.setAttribute('disabled','true')

// }
// let disabledValue=buttonType.getAttribute('disabled')
// console.log(disabledValue)

// buttonType.removeAttribute('name')

// if(buttonType.hasAttribute())




//------------------------------------------------------
//addEventListner
document.getElementById('btn').addEventListener('click',todayDate)
function todayDate()
{
    document.getElementById('displayDate').innerHTML=Date()
}
function alertfunction()
{
    alert('2nd event listner is add to same ')
}

function removeEventListener()
{
    document.getElementById('btn').removeEventListener('click',)
}