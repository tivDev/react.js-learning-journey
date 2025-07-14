// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div 
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>⛔ 404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="button" style={{ display: "inline-block" }}>
        Go Home
      </Link>
    </motion.div>
  );
}