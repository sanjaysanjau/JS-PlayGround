var name="sanjay"

const getName = () =>{
    let name="usha";
console.log("name=",name)
return name;
}
console.log(getName())

let a=[1,2,3]
let b=[...a]
b.push(4)
console.log(a);

const value='345'
console.log(Boolean(value))

let x=0
// console.log(x++)
// console.log(++x)

while(x++ <5,x<3)
    console.log(x)

const obj={"name":"sanajy",
    "data":{}
}

console.log(obj?.name?? 'unknown')
console.log(obj?.name1?? 'unknown')

// console.log(globalThis)
// console.log(window)

function foo(a,b,c){
    console.log(arguments)
    arguments[0]=10
    arguments[1]=5
    console.log(a,b,arguments[0])
}

foo(1,2,3)

numb=6
console.log(numb)
var numb;

// numb1=6
// console.log(numb1)
// let numb1;

console.log(1 << "2" | "3")


function data(){
let a=b=8
console.log("trst a:"+a)

}

data()
console.log("test b:"+b)

let sData = {
    fName: "sanjay", 
    lName: "yuvaraj",
    name: function() {
        return this.fName + " " + this.lName;
    }
};

console.log("Test this keyword:", sData.name());
