import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor='id-email'>
            Email
          <input 
            type="email"
            id="id-email"
        />
        </label>
      </header>
    </div>
  );
}

export default App;
