document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');

    cells.forEach(cell => {
        let html = cell.innerHTML; // παίρνουμε όλο το HTML του κελιού

        // Αντικατάσταση Β2 με span
        html = html.replace(/Β2/g, '<span style="color: cyan; font-weight: bold;">Β2</span>');
        html = html.replace(/ΒΠ/g, '<span style="color: cyan; font-weight: bold;">ΒΠ</span>');
        // Αντικατάσταση Β3 με span
        html = html.replace(/Β3/g, '<span style="color: red; font-weight: bold;">Β3</span>');

        cell.innerHTML = html; // ενημερώνουμε το κελί
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');

    // Highlight Β2 και Β3
    cells.forEach(cell => {
        let html = cell.innerHTML;
        html = html.replace(/Β2/g, '<span style="color: cyan; font-weight: bold;">Β2</span>');
        html = html.replace(/Β3/g, '<span style="color: red; font-weight: bold;">Β3</span>');
        cell.innerHTML = html;
    });

    // Search bar functionality
    const searchInput = document.getElementById('tableSearch');
    const tables = document.querySelectorAll('table');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();

        tables.forEach(table => {
            const rows = table.getElementsByTagName('tr');

            // Ξεκινάμε από 1 για να μην αγγίζουμε το header
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.getElementsByTagName('td');
                let match = false;

                for (let j = 0; j < cells.length; j++) {
                    if (cells[j].textContent.toLowerCase().includes(filter)) {
                        match = true;
                        break;
                    }
                }

                row.style.display = match ? '' : 'none'; // εμφανίζει ή κρύβει τη γραμμή
            }
        });
    });
});
