let items = [];

function loadItems() {
    const saved = localStorage.getItem('shoppingList');
    if (saved) {
        items = JSON.parse(saved);
        renderItems();
    }
}

function saveItems() {
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function addItem() {
    const nameInput = document.getElementById('item-name');
    const priceInput = document.getElementById('item-price');
    
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    
    if (!name || isNaN(price)) {
        alert('Please enter both item name and price');
        return;
    }
    
    items.push({ name, price });
    saveItems();
    renderItems();
    
    nameInput.value = '';
    priceInput.value = '';
    nameInput.focus();
}

function removeItem(index) {
    items.splice(index, 1);
    saveItems();
    renderItems();
}

function clearList() {
    if (confirm('Clear all items?')) {
        items = [];
        saveItems();
        renderItems();
    }
}

function renderItems() {
    const list = document.getElementById('item-list');
    const totalEl = document.getElementById('total-amount');
    
    list.innerHTML = '';
    
    let total = 0;
    
    items.forEach((item, index) => {
        total += item.price;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${item.price.toFixed(2)}</span>
            <button class="remove-btn" onclick="removeItem(${index})">×</button>
        `;
        list.appendChild(li);
    });
    
    totalEl.textContent = '$' + total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    loadItems();
    
    document.getElementById('add-btn').addEventListener('click', addItem);
    document.getElementById('clear-btn').addEventListener('click', clearList);
    
    document.getElementById('item-price').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
});