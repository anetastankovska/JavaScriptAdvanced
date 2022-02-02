/* Reminder App
•	Create a reminder app
•	There should be:
o	An input for entering the title
o	An input for entering priority
o	An input for color
o	A textarea for adding a description
o	A button for adding the reminder
o	A button for showing all reminders
•	When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
•	The object should then be added to an array of reminders
•	When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
•	The title should be the color of the "color" property */

// Get the HTML nodes needed
let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descriptionInput = document.getElementById("description");
let addButton = document.getElementById("add");
let showButton = document.getElementById("show");
let tableContainer = document.getElementsByTagName("table")[0];

let reminders = [];

// Create a reminder object
function Reminder (title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}


// Create event on the add button that will append objects to the array
addButton.addEventListener('click', function () {
    let title = titleInput.value;
    let priority = priorityInput.value;
    let color = colorInput.value;
    let description = descriptionInput.value;

    let reminder = new Reminder (title, priority, color, description);
    reminders.push(reminder);
    console.log(reminders);

    // titleInput.value = "";
    // priorityInput.value = "";
    // colorInput.value = "";
    // descriptionInput.value = "";
    document.getElementsByTagName("form")[0].reset();
})


// Create a function that will display reminders
function showReminders (reminders) {
    let newArray = [];
    for (let element = 0; element < reminders.length; element ++) {
        let temp = [];
        temp.push(reminders[element].title);
        temp.push(reminders[element].priority);
        temp.push(reminders[element].description);
        
        
        newArray.push(temp);
    }
    return newArray;
}

let array = [{title: 'Write homework', priority: 'high', color: 'red', description: 'Write your homework ASAP'}];
showReminders (array);



// Create event on the show button that will trigger displaying the reminders on screen
showButton.addEventListener('click', function () {
    tableContainer.innerHTML += "<tr> <th>Title</th> <th>Priority</th> <th>Reminders</th> ";

    tableContainer.innerHTML += ``

})




