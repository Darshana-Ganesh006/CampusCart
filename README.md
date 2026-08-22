# 🛒 CampusCart – Student Essentials

CampusCart is a responsive web-based product gallery designed specifically for students. It provides an easy and organized way to browse essential college products such as stationery, electronics, bags, and accessories.

The project demonstrates how JavaScript can be used to dynamically filter, search, sort, and interact with products without reloading the webpage.

---

## 📌 Project Overview

The main objective of CampusCart is to develop an interactive product gallery where users can easily explore student essentials.

The project was developed using **HTML, CSS, and JavaScript** and focuses on creating a simple, responsive, and user-friendly shopping interface.

Unlike a static product page, CampusCart provides dynamic functionality through JavaScript, allowing the product gallery to respond immediately to user actions.

---

## 🎯 Objectives

The main objectives of this project are:

- To develop a responsive product gallery for student essentials.
- To implement dynamic product filtering using JavaScript.
- To allow users to search for products without reloading the page.
- To provide product sorting based on price and name.
- To display detailed information about individual products.
- To implement a basic shopping cart interaction.
- To preserve cart information using browser LocalStorage.
- To provide a light and dark theme for better user experience.
- To create a clean and professional user interface.

---

## ✨ Key Features

### 🔎 Product Search

Users can search for products by entering the product name in the search bar.

The results are updated dynamically without refreshing the webpage.

---

### 🏷️ Category Filtering

Products can be filtered according to their category.

Available categories include:

- All
- Stationery
- Electronics
- Bags
- Accessories

JavaScript dynamically shows and hides products based on the selected category.

---

### ↕️ Product Sorting

Products can be sorted according to different options:

- Price: Low to High
- Price: High to Low
- Name: A-Z
- Name: Z-A

The product cards are reordered dynamically using JavaScript.

---

### 👁️ Product Details

Clicking on a product opens a details popup.

The popup displays:

- Product image
- Product name
- Product description
- Product price

This allows users to view additional information without navigating to another page.

---

### 🛒 Add to Cart

Users can click the **Add to Cart** button to add a product to the cart.

After clicking:

- The button changes to **✓ Added**
- The cart count increases
- The updated count is displayed in the header

---

### 💾 LocalStorage

CampusCart uses the browser's **LocalStorage** feature to preserve important user preferences.

The cart count is stored in LocalStorage, so it remains available even after refreshing the webpage.

The selected light/dark theme is also saved using LocalStorage.

---

### 🌙 Light / Dark Mode

A theme toggle allows users to switch between:

- ☀️ Light Mode
- 🌙 Dark Mode

The selected theme is saved using LocalStorage so that the preference remains after refreshing the page.

---

### 📱 Responsive Design

The website is designed to work across different screen sizes, including:

- Desktop
- Laptop
- Tablet
- Mobile devices

CSS media queries are used to adjust the product layout and interface for smaller screens.

---

### ✨ Interactive User Interface

The website includes several visual effects to improve the user experience:

- Product card hover effects
- Button hover effects
- Smooth transitions
- Product image animations
- Theme switching
- Interactive product popup

---

## 🛠️ Technologies Used

### HTML5

HTML is used to create the structure of the webpage, including:

- Header
- Navigation
- Search section
- Filter buttons
- Product gallery
- Product cards
- Product details popup
- Footer

### CSS3

CSS is used for:

- Page layout
- Product card design
- Responsive design
- Colors and typography
- Hover effects
- Animations
- Light/dark themes

### JavaScript

JavaScript provides the main interactive functionality of the application.

It is used for:

- Product filtering
- Product searching
- Product sorting
- Dynamic product display
- Product details popup
- Add-to-cart functionality
- Cart count management
- Theme switching
- LocalStorage

### Browser LocalStorage

LocalStorage is used to save:

- Cart count
- Selected theme

This allows selected information to remain available after the page is refreshed.

---

## ⚙️ How Product Filtering Works

The product gallery uses JavaScript to dynamically show and hide product cards.

When the user selects a category, JavaScript checks the category assigned to each product.

For example:

```text
User selects "Stationery"
             ↓
JavaScript checks product categories
             ↓
Stationery products → Display
Other products → Hide
             ↓
Product count is updated