// Function to create the table dynamically
function createTable() {
    // Prompt for number of rows
    const rows = parseInt(prompt("Input number of rows:"), 10);

    // Prompt for number of columns
    const columns = parseInt(prompt("Input number of columns:"), 10);

    // Get the table element by its ID
    const table = document.getElementById("myTable");

    // Clear any existing table content
    table.innerHTML = "";

    // Generate the table rows and columns dynamically
    for (let i = 0; i < rows; i++) {
        // Create a new table row
        const row = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            // Create a new table cell
            const cell = document.createElement("td");

            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;

            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
}
