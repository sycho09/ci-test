import "./App.css";
import Greet from "./components/greet/greet";

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Greet lastname="Lewis" />
      <Greet lastname="Dewy" />
    </div>
  );
}

export default App;
