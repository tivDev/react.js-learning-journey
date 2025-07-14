import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>🏠 Home Page</h2>
      <p>This is the home page content. Only visible when logged in.</p>
    </motion.div>
  );
}
