// class Vehicle
// {
//     constructor(VehicleType,modelName)
//     {
//         this.VehicleType=VehicleType
//         this.modelName=modelName
//     }
//     showDetails()
//     {
//         console.log(`the type of vehicle is ${this.vehicleType} and themode is ${this.modelName}`)
//     }
// }
// let vehicle=new Vehicle('Car','BMW')
// vehicle.showDetails()





//--------------------abstraction--------------------
// class Square
// {
//     constructor(length,breadth)
//     {
//         this.length=length
//         this.breadth=breadth
//     }

//     calculateArea()
//     {
//         let area=this.lenght*this.breadth
//         return area
//     }
//     calculatePerimeter()
//     {
//         let Perimeter=2*(this.lenght+this.breadth)
//         return Perimeter
//     }
// }

// let sqare=new Square(4,5)
// console.log(`the area of square is`+sqare.calculateArea())



// //----------------------abstraction--------------------
// class Car
// {
//     constructor()
//     {
//         if(this.constructor==Car)
//         {
//             console.log('abstract classes cant be instantiated')
//         }
//     }
//     showCarDetails()
//     {

//     }
// }

// class Audi extends Car {
//     constructor(model, year) {
//         super();
//         this.model = model;
//         this.year = year;
//     }

//     showCarDetails() {
//         console.log(`Audi ${this.model}, Year: ${this.year}`);
//     }
// }


//abstraction
// function calculateArea(radius) {
//     return Math.PI * radius ** 2;
// }

// let circleArea = calculateArea(5);
// console.log(circleArea);


//-----------inheritance----------------
// class Employee
// {
//     constructor(name,designation,salary)
//     {
//         this.name=name
//         this.designation=designation
//         this.salary=salary
//     }
//     displayInfo()
//     {
//         console.log('Hey iam a function in parent class')
//     }
// }

// class Manager extends Employee
// {
//     constructor(name,designation,salary,id)
//     {
//         super(name,designation,salary)
//         this.id=id
//     }
//     showDetails()
//     {
//         console.log(`the name of employee is ${this.name} salary is ${this.salary} 
//         designation is ${this.designation} and id is ${this.id}`)
//     }
// }

//---------------------------------------------

// class Employee {
//     constructor(name, designation, salary) {
//         this.name = name;
//         this.designation = designation;
//         this.salary = salary;
//     }

//     displayInfo() {
//         console.log('Hey, I am a function in the parent class');
//     }
// }

// class Manager extends Employee {
//     constructor(name, designation, salary, id) {
//         super(name, designation, salary);
//         this.id = id;
//     }

//     showDetails() {
//         console.log(`The name of the employee is ${this.name}, salary is ${this.salary},
//          designation is ${this.designation}, and id is ${this.id}`);
//     }
// }

// let manager = new Manager('John Doe', 'Manager', 50000, 'M123');
// manager.showDetails();




//-----------------------prototype--------------------

// const arr=[1,2,3,4]
// console.log(arr)

// console.log(Object.getPrototypeOf(arr))

// let prototype=Object.getPrototypeOf(arr)
// console.log(Object.getPrototypeOf(prototype))


//---------------------polymorphism----------------------------
class Shape
{
    area()
    {
        console.log('area from shape class')
    }
}

class Rectangle extends Shape
{
    area()
    {
        console.log('area of retangle is '+(2*3))
    }
}

class Square extends Rectangle
{
    area()
    {
        console.log('area of Square is '+(2*2))
    }
}

let shape=new Shape()
let retangle=new Rectangle()
let sqare=new Square()
shape.area()
retangle.area()
sqare.area()



// class Shape
// {
//     area(valueOne,valueTwo)
//     {
//         console.log(valueOne*valueTwo)
//     }
// }

// class Rectangle extends Shape
// {
//     area(valueOne,valueTwo)
//     {
//         super.area(valueOne,valueTwo)
        
//     }
// }



// let retangle=new Rectangle()
// retangle.area(2,3)


