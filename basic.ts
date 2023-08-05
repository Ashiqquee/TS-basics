//Variables///

//string//

let scene: string = "Hello Ashique";


//number//

let userId : number = 1;

//better (because ts knows what is going on); 

let userId2 = 2 ;

//boolean//

let isLogged : boolean = false;


//any (Won't give any errors;not better to use)//

let myName : any = "Ashique";
myName = 10



//function//

function addNum (num : number){
    return num+2
};

//Default value in function.

const addUser = (name : string,isAdmin : boolean = false) => {};



// function return value mention

const returnFunction = (num :number) : number => {
    return 2+num
}


//Here no need to mention type of val, because ts knows that because of arr is filled with numbers.
//but we can give return type  
const arr = [1,2,3];
 
arr.map((val) : string => {
    return `${val}`
});

///If we dont want to return anything in a function

function err (error :string) :void {
    console.log(error);
    
}

//Also another thing never (nerver return anything,kind of void, but let see example);

function handleErr (err : string) : never {
    throw new Error (err)
}


//Giving obj as return type 

function course () : {} {
    return {}
}

///Specifying what needs to return on obj

function newCorse () : {name:string} {
    return {name:'ashique'}
}

// console.log(newCorse());



//Class//

class Person {
    firstName : string;
    lastName: string;


    constructor (firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    };

    getFullName () : string{
        return `${this.firstName} ${this.lastName}`
    } 
};

const rollNumber = new Person('Muhammed',"Ashique");


// console.log(rollNumber.getFullName());


///Getter and setter for private properties

class A {
    private age: number ;

    constructor(age:number){
        this.age = age;
    }

    public get _age() {
        return this.age;
    };

    public set _age(theAge:number){
        if(theAge > 200 || theAge<=0){
            throw new Error("Age is Invalid");
        }
        this.age = theAge;
    }
}

const person1 = new A(10);

console.log(person1._age);

person1._age = 12;

console.log(person1._age);




export {};