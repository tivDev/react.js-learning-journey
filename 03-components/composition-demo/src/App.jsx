
import './App.css'
import Profile from './components/Profile';


function App() {
  const users = [
    { id: 1, name: 'Tiv', role: 'Web Developer' },
    { id: 2, name: 'Sophea', role: 'Designer' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>06: Composition Demo</h1>

      {users.map(user => (
        <Profile key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default App;