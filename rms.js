function convertToINR(amount) {
    return "₹" + amount;
}

function showBill() {
    const customerName = document.getElementById('name').value.trim();
    const customerContact = document.getElementById('contact').value.trim();
    
    if (!customerName) {
        alert("Please enter customer name.");
        return;
    }

    const items = {
        "Burger": { price: 100, quantity: parseInt(document.getElementById('burger').value) || 0 },
        "Pizza": { price: 200, quantity: parseInt(document.getElementById('pizza').value) || 0 },
        "Pasta": { price: 150, quantity: parseInt(document.getElementById('pasta').value) || 0 },
        "Sandwich": { price: 80, quantity: parseInt(document.getElementById('sandwich').value) || 0 },
        "Salad": { price: 90, quantity: parseInt(document.getElementById('salad').value) || 0 },
        "Noodles": { price: 60, quantity: parseInt(document.getElementById('noodles').value) || 0 },
        "Shakes": { price: 45, quantity: parseInt(document.getElementById('shakes').value) || 0 },
        "Fruit juice": { price: 35, quantity: parseInt(document.getElementById('fruit juice').value) || 0 },
        "Water bottle": { price: 20, quantity: parseInt(document.getElementById('water bottle').value) || 0 },
        "French fries": { price: 90, quantity: parseInt(document.getElementById('french fries').value) || 0 },
        "Biscuits": { price: 30, quantity: parseInt(document.getElementById('biscuits').value) || 0 },
        "Chocolates": { price: 40, quantity: parseInt(document.getElementById('chocolates').value) || 0 },
        "Pastries": { price: 65, quantity: parseInt(document.getElementById('pastries').value) || 0 },
        "Cold drink": { price: 25, quantity: parseInt(document.getElementById('cold drink').value) || 0 },
    };

    let totalPrice = 0;
    let selectedItems = '';

    for (const [item, details] of Object.entries(items)) {
        if (details.quantity > 0) {
            selectedItems += `${item} x ${details.quantity} - ${convertToINR(details.price * details.quantity)}\n`;
            totalPrice += details.price * details.quantity;
        }
    }

    if (!selectedItems) {
        alert("Please select at least one item.");
        return;
    }

    const gstPercentage = 18;
    const gstAmount = (totalPrice * gstPercentage) / 100;
    const grandTotal = totalPrice + gstAmount;

    const bill = `
Customer Name: ${customerName}
Customer Contact: ${customerContact}

Selected Items:
${selectedItems}
Total Price: ${convertToINR(totalPrice)}
GST (${gstPercentage}%): ${convertToINR(gstAmount)}
Grand Total: ${convertToINR(grandTotal)}
    `;

    document.getElementById('bill-output').textContent = bill;
}

function pastRecords() {
    alert("This feature is not implemented yet.");
}

function clearSelection() {
    document.getElementById('name').value = '';
    document.getElementById('contact').value = '';
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    document.getElementById('bill-output').textContent = '';
}
