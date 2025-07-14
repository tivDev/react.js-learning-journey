import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>👤 Profile Page</h2>
      <p>Your user profile information goes here.</p>
    </motion.div>
  );
}
