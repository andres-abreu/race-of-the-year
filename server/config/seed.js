const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'T-Shirts' },
    { name: 'Running Shorts' },
    { name: 'Running Shoes' },
    { name: 'Water Bottles' },
    { name: 'Sun Screen' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Mens T-Shirt',
      description:
        'Running Mens T-shirt, breathable, comformtable & sweat-proof',
      image: 'mens-shirt 2.jpg',
      category: categories[0]._id,
      price: 39.99,
      quantity: 500
    },
    {
      name: 'Womens T-Shirt',
      description:
        'Running Womens T-Shirt, breathable, comfortable & sweat-proof',
      image: 'womens-shirt 2.jpg',
      category: categories[0]._id,
      price: 39.99,
      quantity: 500
    },
    {
      name: 'Mens Running Shorts',
      category: categories[4]._id,
      description:
        'The best for running marathons',
      image: 'mens-shorts 2.jpg',
      price: 45.99,
      quantity: 50
    },
    {
      name: 'Womens Running Shorts',
      category: categories[4]._id,
      description:
        'The best for running marathons, also, they are squat-proof',
      image: 'womens-shorts 2.jpg',
      price: 45.99,
      quantity: 50
    },
    {
      name: 'Mens Running Shoes',
      category: categories[1]._id,
      description:
        'Trail & Track Running Shoes, made for marathons',
      image: 'mens-shoes 2.jpg',
      price: 79.99,
      quantity: 20
    },
    {
      name: 'Womens Running Shoes',
      category: categories[1]._id,
      description:
        'Trail & Track Running Shoes, made for marathons',
      image: 'womens-shoes 2.jpg',
      price: 79.99,
      quantity: 50
    },
    {
      name: 'Water Bottle',
      category: categories[2]._id,
      description:
        'Reduce, reuse, recycle & take your water everywhere!',
      image: 'bottle-1 2.jpg',
      price: 30.99,
      quantity: 30
    },
    {
      name: 'Water Bottle',
      category: categories[2]._id,
      description:
        'Reduce, reuse, recycle & take your water everywhere!',
      image: 'bottle-2 2.jpg',
      price: 30.99,
      quantity: 30
    },
    {
      name: 'Face Sunscreen - SPF 50',
      category: categories[3]._id,
      description:
        ' Protect your face & avoid premature wrinkles',
      image: 'sunscreen-face 2.jpg',
      price: 30.99,
      quantity: 40
    },
    {
      name: 'Body Sunscreen - SPF 50',
      category: categories[4]._id,
      description: 'Do not be lobster, protect your body from nasty sunburns.',
      image: 'sunscreen-body 2.jpg',
      price: 50.99,
      quantity: 40
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
