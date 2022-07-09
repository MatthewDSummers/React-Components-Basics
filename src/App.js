import './App.css';
import Greeting from './components/Greeting';
import Congratulations from './components/Congratulations';
import Practice from './components/Practice';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Congratulations />
      <Practice />
    </div>
  );
}

export default App;
