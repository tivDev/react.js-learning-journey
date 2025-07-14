function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const isLoggedIn = true;

  return (
    <div style={{ padding: '1.5rem', fontFamily: 'Arial' }}>
      <h1>02: Rendering Demo</h1>

      {/* Conditional rendering with ternary */}
      <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>

      {/* Conditional rendering with && */}
      {fruits.length > 0 && <h2>Fruit List:</h2>}

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
