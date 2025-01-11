// Function to create the table dynamically
function createTable() {
    // Prompt for number of rows
	let rows= parseInt(prompt('Input number of rows'));
	let cols = parseInt(prompt('Input number of columns'));
	let table = document.getElementById("myTable");
	table.innerText ="";
	for(let i=0;i<rows;i++){
		let tr = document.createElement('tr');

		for(let j=0;j<cols;j++){
			let td = document.createElement('td');
			td.textContent = `Row-${i} Column-${j}`;
			tr.append(td);
		}
		table.append(tr);
	}
}
