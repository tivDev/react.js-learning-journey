
# 🚀 Dynamic Route Navigation Guards

A React project featuring **protected routes**, **inspired UI design**, and smooth **Framer Motion** animations for seamless transitions between pages.

![Demo](https://user-images.githubusercontent.com/30027932/123456789-abc12345-d5e6-7890-1234567890ab.gif)
> *(Replace this placeholder with a real screenshot or GIF of your app)*

---

## ✨ Features

- ✅ **Protected Routes** (`/`, `/profile`, `/users`, `/user/:id`)
- ✅ **Public Route** (`/login`)
- ✅ **Framer Motion** page transitions
- ✅ **Logout Functionality**
- ✅ **404 Not Found Page**
- ✅ **Minimal like design** (rounded corners, soft shadows, blue accents)
- ✅ **User Management** (List & Detail)

---

## 🛠 Setup Guide

### 1. Get the Project

If you **don’t have a React app yet**, create one using Vite:

```bash
npm create vite@latest navigation-guards -- --template react
cd navigation-guards
````

### 2. Install Required Dependencies

```bash
npm install react-router-dom framer-motion
# or
yarn add react-router-dom framer-motion
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Then open your browser at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── guards/
│   └── ProtectedRoute.jsx      # Route protection logic
├── components/
│   └── Navigation.jsx          # Navigation bar with logout
├── pages/
│   ├── Home.jsx                # Protected homepage
│   ├── Profile.jsx             # Protected profile page
│   ├── ListUser.jsx            # Protected user list (table view)
│   ├── UserDetail.jsx          # Protected user detail page
│   ├── Login.jsx               # Public login page
│   └── NotFound.jsx            # 404 page
├── App.jsx                     # App layout and route setup
├── main.jsx                    # React entry point
└── index.css                   # Global CSS styles
```

---

## 🔐 Authentication Flow

| Step               | Behavior                                      |
| ------------------ | --------------------------------------------- |
| **Login**          | On submit, sets `localStorage.auth = "true"`  |
| **Logout**         | Clears localStorage and redirects to `/login` |
| **ProtectedRoute** | If `auth !== "true"` → redirect to `/login`   |

---

## 🔄 Route Overview

| Route       | Access    | Description                     |
| ----------- | --------- | ------------------------------- |
| `/`         | Protected | Homepage (dashboard or landing) |
| `/profile`  | Protected | User profile page               |
| `/users`    | Protected | List of users (table format)    |
| `/user/:id` | Protected | User detail page                |
| `/login`    | Public    | Login form                      |
| `*`         | Public    | 404 page (not found)            |

---

## 👥 User Management Feature

* 📋 View all users in a **styled table** format with name and email
* 🔎 Click a user to see detailed info (name, email, phone, etc.)
* 🧭 Animated route transition between list and detail views
* 🎨 Designed with clean style (rounded corners, soft shadows)

---

## 🎨 UI Design

* **Rounded Corners**: `border-radius: 20px`
* **Soft Shadows**: `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05)`
* **Primary Blue**: `#007aff`
* **Destructive Red**: `#ff3b30` (used for logout button)
* **Font**: Uses system font stack like (`-apple-system`, `BlinkMacSystemFont`, etc.)

---

## 🧩 Built With

* [React](https://reactjs.org/)
* [React Router v6](https://reactrouter.com/)
* [Framer Motion](https://www.framer.com/motion/)