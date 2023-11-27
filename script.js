// Simulated issue tracking
let issues = [];

// Function to create an issue
function createIssue() {
    // Get values from the input fields
    const issueDescription = document.getElementById('issueDescription').value;
    const prioritySelect = document.getElementById('prioritySelect');
    const priority = prioritySelect.options[prioritySelect.selectedIndex].value;
    const fileInput = document.getElementById('fileInput').files;

    // Create an issue object
    const issue = {
        description: issueDescription,
        priority: priority,
        attachments: fileInput,
    };

    // Add the issue to the list
    issues.push(issue);

    // Call the function to display issues
    displayIssues();
}

// Function to display issues
function displayIssues() {
    // Get the HTML element for the issues list
    const issuesList = document.getElementById('issues');
    // Clear the existing content
    issuesList.innerHTML = '';
    // Iterate through the list of issues and create HTML elements for each
    issues.forEach((issue, index) => {
        // Create a list item for each issue
        const listItem = document.createElement('li');
        
        // Set the inner HTML of the list item
        listItem.innerHTML = `
            <strong>Description:</strong> ${issue.description}<br>
            <strong>Priority:</strong> ${issue.priority}<br>
            <strong>Attachments:</strong> ${issue.attachments.length} files<br>
        `;

        // Create a delete button for each issue
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            // Remove the issue from the list and update the display
            issues.splice(index, 1);
            displayIssues();
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the issues list
        issuesList.appendChild(listItem);
    });
}
