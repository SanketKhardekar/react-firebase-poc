import "./App.css";
import Database from "./Components/DatabaseFetchingComponent";
import Login from "./Components/Login";
import Storage from "./Components/StoringComponent";

function App() {
  return (
    <>
      <div className="App">
        <Login />
        <Database />
      </div>
      <div className="App">
        <Storage />
      </div>
    </>
  );
}

export default App;
