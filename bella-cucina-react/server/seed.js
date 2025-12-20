const mongoose = require('mongoose');
require('dotenv').config();
const MenuItem = require('./models/MenuItem');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bellacucina';

const menuItems = [
  // Appetizers
  {
    name: "Bruschetta Classica",
    description: "Toasted bread with tomatoes, garlic, and basil",
    price: 8.99,
    category: "Appetizers"
  },
  {
    name: "Calamari Fritti",
    description: "Crispy fried squid with marinara sauce",
    price: 12.99,
    category: "Appetizers"
  },
  {
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil",
    price: 10.99,
    category: "Appetizers"
  },
  // Main Courses
  {
    name: "Spaghetti Carbonara",
    description: "Classic Roman pasta with pancetta and egg",
    price: 18.99,
    category: "Main Courses"
  },
  {
    name: "Lasagna Bolognese",
    description: "Layers of pasta with rich meat sauce",
    price: 19.99,
    category: "Main Courses"
  },
  {
    name: "Osso Buco",
    description: "Braised veal shanks with vegetables",
    price: 28.99,
    category: "Main Courses"
  },
  // Wood-Fired Pizza
  {
    name: "Margherita",
    description: "Tomato sauce, mozzarella, and fresh basil",
    price: 14.99,
    category: "Wood-Fired Pizza"
  },
  {
    name: "Quattro Formaggi",
    description: "Four cheese blend on a crispy crust",
    price: 16.99,
    category: "Wood-Fired Pizza"
  },
  {
    name: "Diavola",
    description: "Spicy salami with chili oil",
    price: 17.99,
    category: "Wood-Fired Pizza"
  },
  // Desserts
  {
    name: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert",
    price: 8.99,
    category: "Desserts"
  },
  {
    name: "Panna Cotta",
    description: "Creamy vanilla pudding with berry sauce",
    price: 7.99,
    category: "Desserts"
  },
  {
    name: "Cannoli",
    description: "Crispy pastry filled with sweet ricotta",
    price: 6.99,
    category: "Desserts"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing menu items
    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items');

    // Insert new menu items
    const inserted = await MenuItem.insertMany(menuItems);
    console.log(`Inserted ${inserted.length} menu items`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
