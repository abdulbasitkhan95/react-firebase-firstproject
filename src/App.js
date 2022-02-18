import './App.css';
import {register} from "./config/firebase";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      <div>
        <Login/>
        <Register/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
