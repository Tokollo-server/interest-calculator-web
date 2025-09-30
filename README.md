# React Interest Calculator

A simple banking simulation app built with **React** and **JSX**.  
The application allows users to manage a balance by depositing, withdrawing, adding interest, and charging fees — simulating basic bank account functionality.

---

## 🚀 Features

-  Display the user’s **current bank balance**.
-  **Deposit money** into the account.
-  **Withdraw money** from the account.
-  **Add interest** (fixed or user-input percentage).
-  **Charge bank fees** (fixed or percentage-based).
-  Optional: **Negative balance alert** if funds go below zero.
-  Styled with **Bootstrap** for a clean look.
-  Uses **separate components** with **state lifted** to a parent component.

---

##  Project Setup

### 1. Create Project Folder
```bash```
mkdir ReactComponents
cd ReactComponents
## 2. Create React App

## Install React using Create React App (CRA) and name the project:

npx create-react-app react-interest-calculator
cd react-interest-calculator

## 3. Start the Development Server

Run:

npm start


Then open http://localhost:3000
 to view the app in your browser.

## Usage

Enter an amount in the Deposit field and click Deposit to add to the balance.

Enter an amount in the Withdraw field and click Withdraw to deduct from the balance.

Click Add Interest to apply an interest rate (either fixed or user-input).

Click Charge Fees to deduct banking fees (fixed or percentage).

The balance updates dynamically.

## Components

App.js → Parent component holding the shared state (balance).

BalanceDisplay.js → Displays the current balance.

Button.js / Controls.js → Handles deposit, withdraw, interest, and fees.

## Deployment

Before submission or upload:

Delete the node_modules folder to reduce size:

rm -rf node_modules


Compress your project folder.

Upload it to the required Dropbox task folder.

## Notes

Ensure you have Node.js and npm installed.

The app was bootstrapped with Create React App for easy setup.

Bootstrap can be added via CDN or installed with:

npm install bootstrap
