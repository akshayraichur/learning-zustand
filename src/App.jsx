import "./App.css";
import Column from "./components/columns";

// src/app
function App() {
  return (
    <div className="App">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
}

export default App;
