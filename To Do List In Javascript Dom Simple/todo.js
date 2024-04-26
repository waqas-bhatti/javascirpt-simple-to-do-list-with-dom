const input = document.querySelector('#input-box');
const text = document.querySelector('#taskList');

const add = () => {
    if (input.value === '') {
        alert('Please enter a value');
    } else {
        // Create list item
        const newli = document.createElement('li');
        newli.innerHTML = `${input.value}`;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            newli.remove(); // Remove the list item when delete button is clicked
        });

        // Create edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Edit') {
                editBtn.textContent = 'Save';
                // Set contentEditable to true and change background color to indicate editing mode
                newli.contentEditable = 'true';
                newli.style.backgroundColor = 'red';
            } else {
                editBtn.textContent = 'Edit';
                // Set contentEditable to false and change background color back
                newli.contentEditable = 'false';
                newli.style.backgroundColor = 'white';
            }
        });

        // Append delete and edit buttons to list item
        newli.appendChild(deleteBtn);
        newli.appendChild(editBtn);

        // Append list item to task list
        text.appendChild(newli);

        // Clear input value
        input.value = '';
    }
};
