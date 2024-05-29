#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// create class
class Student {
    name: string;
    constructor(n:string){
        this.name = n

    }
}
    class person{
     students:Student[]=[]
    addStudent(object:Student){
        this.students.push(object)
    }
}

const persons = new person()

        const programStart =async (persons:person)=>{
            do{
            console.log("Welcome!");
        // await called out
        const answer = await inquirer.prompt({
        // create object
        name: "select",
        type: "list",
        message: chalk.yellow ("who would you like to interact with?"),
        choices: ["staff", "student", "exit"],  
        })
        // if else statement
        if (answer.select == "staff"){
            console.log("You approach the staff room. Please feel free to ask me any question");
        }
         else if(answer.select == "student"){
            // user inpur
            const answer = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.green("Enter the student's name you want to engage with:")
            });
            const student = persons.students.find(val => val.name == answer.student)
            if(!student){
                const name = new Student(answer.student)
                persons.addStudent(name)
                console.log(`Hello I am ${name.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list");
                console.log(persons.students); 
            } else {
                console.log(`Hello I am ${student.name}. Nice to see you again!`);
                console.log(" Yor are existing student list");
                console.log(persons.students);
    
            }
        } else if( answer.select == "exit"){
            console.log("Exiting the program...");
        process.exit();
        }
    }while(true)
    }
    programStart(persons);