const orders = [];
let idCounter = 1;

function addOrder({ productName, quantity, pricePerUnit }) {
    // Input validation
    if (quantity <= 0 || pricePerUnit <= 0) {
        return { error: 'Quantity and price must be greater than zero' };
    }

    // Calculate total amount and discounts
    const total = quantity * pricePerUnit;
    let discount = 0;

    if (total > 10000) discount += total * 0.10; // 10% discount
    if (quantity > 5) discount += 500;          // ₹500 discount

    const finalTotal = total - discount;

    // Create and save the order
    const order = {
        id: idCounter++,
        productName,
        quantity,
        pricePerUnit,
        total,
        discount,
        finalTotal,
        timestamp: new Date(),
    };
    orders.push(order);
    return order;
}

function getOrder(id) {
    return orders.find(order => order.id === parseInt(id, 10));
}

function getTotalRevenue() {
    return orders.reduce((acc, order) => acc + order.finalTotal, 0);
}

module.exports = { addOrder, getOrder, getTotalRevenue };
