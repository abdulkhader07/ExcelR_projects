let student={
    studentName:'Syed',
    age:12,
    displayInformation:function(){
        console.log('the name of student is'+student.studentName+'and age of the student is'+student.age)
    },
    marks:{
        English:22,
        Maths:33
    }
}
console.log(student.marks.English)
//console.log(student.marks['Maths'])
//console.log(student['marks'['English']])
//console.log(student.studentName)
//student.displayInformation()
//console.log(student['age'])

let secondStudent=new Object()
secondStudent=studentName='syam'
//console.log(secondStudent.hasOwnProperty('studentName'))          //---------------Usage of hasOwnProperty which give true or false for does that has that property or not---------------
//console.log(secondStudent)

Object.defineProperties(ob1,'c',{
    value:100,
    enumerabel:false,
    writable:false,
    configurable:false
});
ob1.c;
console.log(Object.getOwnPropertyDescriptor( ob1,'c' ));

//-------------------------------
// var ob={};
// Object.defineProperty(ab, 'a', {consfigurable: true, value: 1});
// ob;
// delete ob.a;


//---------
// let studentClone=Object.assign({},student)
// console.log(studentClone)

//-------

let studentClone=JSON.parse(JSON.stringify(student))
console.log(studentClone)
studentClone.studentName='sita'
console.log(student)
console.log("-------------")
console.log(studentClone)


//----------------------------------Arrayofobjects----------
let movies=[{
MovieName:'abc',
ratings:3
},
{MovieName:'xyz',
raings:2}]
