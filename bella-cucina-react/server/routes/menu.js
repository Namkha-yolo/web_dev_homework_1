const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// GET all menu items (grouped by category)
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ available: true }).sort({ category: 1, name: 1 });

    // Group items by category
    const groupedMenu = menuItems.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image
      });
      return acc;
    }, {});

    // Convert to array format matching frontend structure
    const menuData = Object.entries(groupedMenu).map(([category, items]) => ({
      category,
      items
    }));

    res.json(menuData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu', error: error.message });
  }
});

// GET single menu item by ID
router.get('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu item', error: error.message });
  }
});

// POST create new menu item
router.post('/', async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: 'Error creating menu item', error: error.message });
  }
});

// PUT update menu item
router.put('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(400).json({ message: 'Error updating menu item', error: error.message });
  }
});

// DELETE menu item
router.delete('/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting menu item', error: error.message });
  }
});

module.exports = router;
