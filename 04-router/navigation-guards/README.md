# 🚀 Navigation Guards

A React project with **protected routes**, **inspired UI**, and smooth **Framer Motion** animations.

![Demo](https://user-images.githubusercontent.com/30027932/123456789-abc12345-d5e6-7890-1234567890ab.gif)
**(Demo placeholder — replace with a real screenshot)**

---

## ✨ Features

* ✅ **Protected Routes** (`/`, `/profile`)
* ✅ **Public Route** (`/login`)
* ✅ **404 Page** for unmatched routes
* ✅ **Framer Motion** page transitions
* ✅ **Logout Functionality**

---

## 🛠 Setup Guide

### 1. Get the Project

If you **don’t have a React app yet**, either:

* **Create a new Vite React app:**

  ```bash
  npm create vite@latest navigation-guards -- --template react
  cd navigation-guards
  ```

* **Or clone this project** if available.

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Project

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
src/
├── guards/
│   └── ProtectedRoute.jsx      # Route protection logic
├── components/
│   └── Navigation.jsx          # navbar with logout
├── pages/
│   ├── Home.jsx                # Protected homepage
│   ├── Profile.jsx             # Protected profile page
│   ├── Login.jsx               # Public login page
│   └── NotFound.jsx            # 404 page
├── App.jsx                     # Route and layout setup
├── main.jsx                    # React entry point
└── index.css                   # Global styling
```

---

## 🔐 Authentication Flow

* ✅ **Login**: Sets `localStorage.auth = "true"`
* ✅ **Logout**: Clears `localStorage` and redirects to `/login`
* ✅ **ProtectedRoute**: Blocks access to protected pages if not logged in

---

## � Route Overview

| Route      | Access    | Description                           |
| ---------- | --------- | ------------------------------------- |
| `/`        | Protected | Homepage                              |
| `/profile` | Protected | User profile                          |
| `/login`   | Public    | Login page                            |
| `*`        | Public    | 404 page (catches all invalid routes) |

---

## 🎨 UI

* **Rounded Corners**: `border-radius: 20px`
* **Soft Shadows**: `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05)`
* **Primary Blue**: `#007aff` (buttons/links)
* **Destructive Red**: `#ff3b30` (Logout)

---

## 🧩 Dependencies

* [React Router v6](https://reactrouter.com)
* [Framer Motion](https://www.framer.com/motion/)
* Plain **CSS** (no Tailwind or Bootstrap)
