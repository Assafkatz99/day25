// 1.
const square = (a) =>{return a**2}
console.log(square(3));

// 2.
const isPositive = (num) => {
    if (num>0){
        return "true"
    }
    else{
        return "false"
    }
}
console.log(isPositive(3));

// 3.
const formatName = (fname,lname,spaerator=" ") => {
    return (fname + spaerator + lname)
}
console.log((formatName("assaf","katz")))

// 4.
import {greet} from "./utlis/utils.js"
console.log(greet("assaf"));

// 5.
import {calculate} from "./utlis/utils.js"
console.log(calculate(2,3));

// 6.
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];
console.log([...team,...captain])

// 11.
const actors = [
    { actorName: "Tom Hanks", birthdate: "July 9, 1956" },
    { actorName: "Meryl Streep", birthdate: "June 22, 1949" },
    { actorName: "Leonardo DiCaprio", birthdate: "November 11, 1974" },
   ];

// 11.a.
const [firstActor ,,thirdActor] = actors
console.log(thirdActor)



// 11.b.
let leoBDay =thirdActor.birthdate 