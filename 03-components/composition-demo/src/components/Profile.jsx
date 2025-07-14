export default function Profile({ name, role }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}
