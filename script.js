// Listen for the change event on the file input
document.getElementById('fileInput').addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const csvData = e.target.result;
            processData(csvData);
        };

        reader.readAsText(file);
    }
}

function processData(csvData) {
    const rows = csvData.split('\n').map(row => row.split(','));

    // Display Table 1
    const table1Body = document.getElementById('table1').getElementsByTagName('tbody')[0];
    rows.slice(1).forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table1Body.appendChild(tr);
    });

    // Process data for Table 2
    const table2Body = document.getElementById('table2').getElementsByTagName('tbody')[0];
    const categories = ['Alpha', 'Beta', 'Charlie'];
    const expressions = ['A5 + A20', 'A15 / A7', 'A13 * A12'];

    for (let i = 0; i < categories.length; i++) {
        const tr = document.createElement('tr');
        const category = categories[i];
        const expression = expressions[i];

        const tdCategory = document.createElement('td');
        tdCategory.textContent = category;
        tr.appendChild(tdCategory);

        const tdValue = document.createElement('td');
        // Evaluate the expression using values from Table 1
        const value = eval(expression.replace(/[A]\d+/g, match => {
            const index = parseInt(match.slice(1));
            return rows[index][1];
        }));
        tdValue.textContent = value;
        tr.appendChild(tdValue);

        table2Body.appendChild(tr);
    }
}
