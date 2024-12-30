const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseTable');

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    if (description && category && !isNaN(amount)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount} Rs. </td>
            <td><button class="dbtn btn-danger" onclick="this.parentElement.parentElement.remove();">Delete</button></td>
        `;
        expenseList.appendChild(newRow);
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('category').value = '';
    }
    else {
        alert('Please fill all the fields correctly');
    }
});