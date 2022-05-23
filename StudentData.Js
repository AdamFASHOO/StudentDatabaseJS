let goAgain = true;

let names = ["Adam", "Ryan", "Dom"];
let hometown = ["Pinckney", "Ann Arbor", "Dearborn"];
let favFood = ["sushi", "tacos", "donuts"];
let favColor = ["blue", "green", "baby blue"];

while (goAgain === true)
{
    let stuNum = prompt(`Which of our students information would you like to display? (1-${names.length})`);
    let index = stuNum - 1;

    if (stuNum > names.length || stuNum < 1)
    {
        console.log("That is not a student number, please try again.");
        continue;
    }
    else
    {
        CaseSwitcher(index, names, hometown, favFood, favColor);
    }

    Lister(names, hometown, favFood, favColor);

    let allStu = prompt("Would you like to see a list of all students? y/n");
    if (allStu.toLowerCase() === "y" || allStu.toLowerCase() === "yes")
    {
        names.forEach(item =>{
            console.log(item);
        })
    }
    else
    {
        console.log("Alright, we'll keep the full list hidden.");
    }

    goAgain = RunAgain();
}

function Lister(names, hometown, favFood, favColor)
{
    let input = prompt("Would you like to add another student's information? y/n");
    if (input === "y" || input === "yes")
    {
        let newName = prompt("What is the student's name?");
        names.push(newName);

        let newHome = prompt(`What is ${newName}'s hometown?`);
        hometown.push(newHome);

        let newFood = prompt(`What is ${newName}'s favorite food?`);
        favFood.push(newFood);

        let newColor = prompt(`What is ${newName}'s favorite color?`);
        favColor.push(newColor);
    }
    else
    {
        console.log("No problem...");
    }
    
}

function CaseSwitcher(index, names, hometown, favFood, favColor)
{
    console.log(`Student ${index + 1}: ${names[index]}`);
    let info = prompt(`Would you like to display ${names[index]}'s hometown, favorite food, or favorite color? \nHit any other key to exit.`);
    
    if(info.toLowerCase() === "home" || info.toLowerCase() === "town")
    {
        console.log(`${names[index]} is from ${hometown[index]}.`);
    }
    else if (info.toLowerCase() === "food")
    {
        console.log(`${names[index]}'s favorite food is ${favFood[index]}.`);
    }
    else if (info.toLowerCase() === "color")
    {
        console.log(`${names[index]}'s favorite color is ${favColor[index]}.`);
    }
    else
    {
        console.log("Exiting...");
    }
}

function RunAgain()
{
    let input = prompt("Would you like to continue? y/n").toLowerCase().trim();

    if (input === "y")
    {
        return true;
    }
    else if (input === "n")
    {
        return false;
    }
    else
    {
        console.log("I'm sorry, I didn't understand that. Please try again.")
        return RunAgain();
    }
}