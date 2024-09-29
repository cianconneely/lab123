//creating an array of strings

let Tasks = [];

// creating addTask Function
let addTask = (task)=>{

    Tasks.push(task);
    console.log(task + "has been added to my Tasks");
    return Tasks.length;
}

//adding tasks to array 
addTask("Football");
addTask("Hurling");
addTask("Soccer");
addTask("Hockey");
addTask("Baseball");
addTask("Cricket");
addTask("Fuseball");
addTask("Frisbee");

console.log("\n");

//List all tasks function
let listAllTasks = (task)=>{

    Tasks.forEach((element)=>{
        console.log(element);
    })
}

//creating a delete task function 
let deleteTask = (task)=>{

    let index = Tasks.indexOf(task);
    if(index > -1){

        Tasks.splice(index,1);
        console.log(task+ " has been deleted from my tasks");
        }

        else {

            console.log(task+ " not found in array");

        }

        return Tasks.length;

}

//delete task 

deleteTask("Football");
console.log("\n");
listAllTasks();