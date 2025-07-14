import './App.css'
import Greeting from './components/Greeting';

function App() {
  return (
    <div style={{ padding: '1.5rem' }}>
      <h1>03: Prop Demo</h1>
      <Greeting name="Tiv" />
      <Greeting name="React Student" />
    </div>
  );
}

export default App;
