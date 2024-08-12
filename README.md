# Customer Details Portal

## Overview

The Customer Details Portal is a React application developed with TypeScript and Vite. It allows users to view a list of customers, select a customer to view details, and see a photo grid that updates every 10 seconds. The customer list is loaded in batches with a "Load More" button when scrolling to the bottom.

## Features

- **Customer List**: Displays a list of customers with the ability to select a customer.
- **Customer Details**: Shows detailed information about the selected customer.
- **Photo Grid**: Displays a grid of photos that updates every 10 seconds.
- **Infinite Scroll**: Loads more customers as the user scrolls down the list.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/1shakti/customer-details-portal.git
   cd customer-details-portal
   ```

2. **Install Dependencies**
    Install the required packages using npm or yarn:
    ```bash
    npm install
    ```

3. **Running the Project**
    Start the Development Server
    ```bash
    npm run dev
    ```
    This will start the Vite development server and open the application in your default web browser.

4. **Build for Production**
    To create a production build of the application, run:
    ```bash
    npm run build
    ```

5. **Preview the Production Build**
    To preview the production build locally, use:
    ```bash
    npm run preview
    ```
