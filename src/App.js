import './App.css';
import Greeting from './components/Greeting';
import Congratulations from './components/Congratulations';
import Practice from './components/Practice';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Congratulations />
      <Practice />
      <PersonCard firstName={"Andrés"} lastName={"Segovia"} age={129} hairColor={"White"}/>
      <br></br>
      <PersonCard firstName={"Luke"} lastName={"Skywalker"} age={22} hairColor={"Dirty Blonde"}/>
      <PersonCard firstName={"Yoda"} lastName={""} age={900} hairColor={"Grey"}/>
      <PersonCard firstName={"Han"} lastName={"Solo"} age={32} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
