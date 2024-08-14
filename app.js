<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Ordering Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #ff6f61;
            color: white;
            padding: 1em 0;
            text-align: center;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        .menu-item {
            border: 1px solid #ddd;
            margin: 10px 0;
            padding: 15px;
            background-color: #fff;
            border-radius: 5px;
        }
        .menu-item h3 {
            margin: 0;
            color: #ff6f61;
        }
        .order-form {
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            margin-top: 20px;
        }
        .order-form label {
            display: block;
            margin: 10px 0 5px;
        }
        .order-form input, .order-form select, .order-form textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .order-form button {
            background-color: #ff6f61;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
        }
        .order-form button:hover {
            background-color: #e65c50;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Food Ordering Website</h1>
    </header>
    <div class="container">
        <section id="menu">
            <h2>Menu</h2>
            <div class="menu-item">
                <h3>Pizza Margherita</h3>
                <p>A classic pizza with tomato sauce, mozzarella, and basil.</p>
                <p><strong>Price:</strong> $10.00</p>
            </div>
            <div class="menu-item">
                <h3>Burger</h3>
                <p>Juicy beef burger with lettuce, tomato, and cheese.</p>
                <p><strong>Price:</strong> $8.00</p>
            </div>
            <!-- Add more menu items here -->
        </section>
        
        <section id="order">
            <h2>Order Now</h2>
            <form class="order-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>
                
                <label for="item">Select Item:</label>
                <select id="item" name="item" required>
                    <option value="pizza">Pizza Margherita</option>
                    <option value="burger">Burger</option>
                    <!-- Add more items here -->
                </select>
                
                <label for="comments">Special Instructions:</label>
                <textarea id="comments" name="comments" rows="4"></textarea>
                
                <button type="submit">Place Order</button>
            </form>
        </section>
    </div>
    <footer>
        <p>&copy; 2024 Food Ordering Website. All rights reserved.</p>
    </footer>
</body>
</html>
