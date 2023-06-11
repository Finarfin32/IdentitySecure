import "./App.css";
import { Link } from "react-router-dom";
import logo from "/src/media/logo.png";
function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo"></img>
      </div>
      <div className="buttons_container">
        <Link className="log" to="/login">
          Zaloguj się
        </Link>
        <Link className="reg" to="/register">
          Zarejestruj się
        </Link>
      </div>
    </div>
  );
}
export default App;
