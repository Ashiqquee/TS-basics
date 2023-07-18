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


export {};