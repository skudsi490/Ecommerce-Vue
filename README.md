# Documentation for Ecommerce-VueJS Project

# **Introduction**

The Ecommerce-VueJS project is a modern, feature-rich e-commerce application built using Vue.js. It provides a comprehensive platform for online shopping, featuring product browsing, cart management, user authentication, and payment processing.

## **Getting Started**

### **Prerequisites**

- Node.js (Latest LTS version recommended)
- npm or Yarn
- Vue.js
- Nuxt.js
- A modern web browser

### **Installation**

1. Clone the repository:
    
    ```bash
    git clone https://your-repository-url/Ecommerce-VueJS.git
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd Ecommerce-VueJS
    ```
    
3. Install dependencies:
    
    ```
    Copy code
    npm install
    ```
    
    or if you're using Yarn:
    
    ```
    Copy code
    yarn install
    ```
    
4. Start the development server:
    
    ```arduino
    arduinoCopy code
    npm run dev
    ```
    
    or with Yarn:
    
    ```
    Copy code
    yarn dev
    ```
    
5. Open [http://localhost:3000](http://localhost:3000/) in your browser to view the application.

## **Features**

- **Product Browsing:** Users can explore various products organized into categories.
- **Shopping Cart:** A detailed shopping cart with add, remove, and quantity adjustment functionalities.
- **User Authentication:** Secure login and registration system for users using Google and GitHub OAuth.
- **Checkout Process:** An intuitive and secure checkout flow, including shipping address and payment processing.
- **Orders History:** Users can view their past orders and track the status of current orders.
- **Responsive Design:** Fully responsive layout ensuring a seamless experience across various devices.

## **Project Structure**

- **`components/`**: Reusable Vue components such as CartItem, CheckoutItem, and more.
- **`layouts/`**: Vue layouts, including the main layout for the application.
- **`pages/`**: Vue pages representing different routes within the application.
- **`public/`**: Static assets like images and favicon.
- **`stores/`**: State management using Pinia, including user state management.
- **`prisma/`**: Prisma schema and migration files for database management.
- **`server/`**: Backend API routes for handling business logic.
- **`.env`**: Environment variables for configuration (ensure this file is not committed to git).
- **`nuxt.config.ts`**: Nuxt.js configuration file.

## **Environment Variables**

Create a **`.env`** file in the root directory with the following variables:

```makefile
STRIPE_PK_KEY=your_stripe_public_key
STRIPE_SK_KEY=your_stripe_secret_key

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

DATABASE_URL= your_postgres_database_url
```

## **Deployment**

To build and start the production server, run:

```arduino
npm run build
npm start
```

or with Yarn:

```sql
yarn build
yarn start
```

## **Contributing**

Contributions are welcome. Please open an issue or submit a pull request with your proposed changes.

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.