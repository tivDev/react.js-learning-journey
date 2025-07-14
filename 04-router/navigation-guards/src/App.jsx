import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ProtectedRoute from "./guards/ProtectedRoute";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound"; // Add this import

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">🌐 Navigation Guards</div>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} /> {/* 👈 Catch-all route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}