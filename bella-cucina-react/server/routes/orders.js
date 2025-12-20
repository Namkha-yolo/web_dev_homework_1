const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate('items.menuItem');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// GET single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.menuItem');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
});

// POST create new order
router.post('/', async (req, res) => {
  try {
    const { items, customerInfo, notes } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one item' });
    }

    // Calculate total
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const order = new Order({
      items: items.map(item => ({
        menuItem: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total,
      customerInfo: customerInfo || {},
      notes: notes || ''
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: 'Error creating order', error: error.message });
  }
});

// PUT update order status
router.put('/:id', async (req, res) => {
  try {
    const { status, customerInfo, notes } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (customerInfo) updateData.customerInfo = customerInfo;
    if (notes !== undefined) updateData.notes = notes;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: 'Error updating order', error: error.message });
  }
});

// DELETE cancel order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order cancelled successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling order', error: error.message });
  }
});

module.exports = router;
