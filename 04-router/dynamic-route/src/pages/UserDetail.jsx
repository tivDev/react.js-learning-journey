import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const users = [
  { id: 1, name: "Yang Gi", email: "yang@example.com", phone: "012 345 678" },
  { id: 2, name: "Sokha Phan", email: "sokha@example.com", phone: "098 765 432" },
  { id: 3, name: "Vicheka Lim", email: "vicheka@example.com", phone: "011 223 344" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <motion.div className="container" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h2 className="title">📄 User Detail</h2>
      <div className="card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <Link className="button back" to="/users">← Back</Link>
    </motion.div>
  );
}
