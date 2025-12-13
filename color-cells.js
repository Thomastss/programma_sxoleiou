document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');
    
    cells.forEach(cell => {
        let html = cell.innerHTML;
        html = html.replace(/Β2/g, '<span style="color: cyan; font-weight: bold;">Β2</span>');
        html = html.replace(/ΒΠ/g, '<span style="color: cyan; font-weight: bold;">ΒΠ</span>')
        html = html.replace(/Β3/g, '<span style="color: red; font-weight: bold;">Β3</span>');
        cell.innerHTML = html;
    });
});
