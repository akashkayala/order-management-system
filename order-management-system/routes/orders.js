const express = require('express');
const { addOrder, getOrder, getTotalRevenue } = require('../data/orders');

const router = express.Router();

// Place an Order
router.post('/', (req, res) => {
    const order = addOrder(req.body);
    if (order.error) return res.status(400).json(order.error);
    res.status(201).json(order);
});

// Get Order Summary
router.get('/:id', (req, res) => {
    const order = getOrder(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
});

// Calculate Total Revenue
router.get('/revenue', (req, res) => {
    const revenue = getTotalRevenue();
    res.json({ totalRevenue: revenue });
});

module.exports = router;
