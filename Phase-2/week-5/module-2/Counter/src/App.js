import './App.css';
import Count from './counterDisplay';
import Welcome from './helloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Welcome/>
      <Count/>
      </header>
    </div>
  );
}

export default App;
