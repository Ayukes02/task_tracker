const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Event listener for form submission
taskForm.addEventListener('submit', addTask);

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = taskInput.value.trim(); // Get task text and remove whitespace

    if (taskText !== '') {
        const taskItem = document.createElement('li'); // Create new list item
        taskItem.innerText = taskText; // Set task text
        taskItem.classList.add('task'); // Add 'task' class
        taskList.appendChild(taskItem); // Append new task to task list

        // Add event listener for marking task as completed
        taskItem.addEventListener('click', toggleTask);

        taskInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task.'); // Alert user if input is empty
    }
}

// Function to toggle task completion
function toggleTask(event) {
    const taskItem = event.target; // Get clicked task item

    if (!taskItem.classList.contains('completed')) {
        taskItem.classList.add('completed'); // Mark task as completed
    } else {
        taskItem.classList.remove('completed'); // Unmark task as completed
    }
}
