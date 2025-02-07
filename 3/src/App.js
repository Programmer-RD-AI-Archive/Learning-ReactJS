import { useDispatch } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChangeColor from "./components/ChangeColor";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
