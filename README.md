# eCommerce minimal platform

> A minimal eCommerce platform built with the MERN stack & Redux.

![screenshot](https://raw.githubusercontent.com/abdalmajeed/e-shop/main/screenshots/1.png)
![screenshot](https://raw.githubusercontent.com/abdalmajeed/e-shop/main/screenshots/2.png)
![screenshot](https://raw.githubusercontent.com/abdalmajeed/e-shop/main/screenshots/3.png)
![screenshot](https://raw.githubusercontent.com/abdalmajeed/e-shop/main/screenshots/4.png)
![screenshot](https://raw.githubusercontent.com/abdalmajeed/e-shop/main/screenshots/5.png)
![screenshot](https://raw.githubusercontent.com/abdalmajeed/e-shop/main/screenshots/6.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

### Env Variables

Create a .env file in the backend folder and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
cd backend
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000)
# In frontend folder
npm run start

# Run backend (:5000)
# In backend folder
npm run start
```

### Seed Database

You can use the following commands to seed the database with some sample users and products with images as well as destroy all data

```
# In backend folder
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
