import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Yang Gi", email: "yang@example.com" },
  { id: 2, name: "Sokha Phan", email: "sokha@example.com" },
  { id: 3, name: "Vicheka Lim", email: "vicheka@example.com" },
];

export default function ListUser() {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="title">👤 User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: '10%' }}>#</th>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: '20%' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link className="button" to={`/user/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
