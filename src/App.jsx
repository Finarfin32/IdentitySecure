import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="buttons_container">
      <Link className="log" to="/login">Zaloguj się</Link>
      <Link className="reg" to="/register">Zaarejestruj się</Link>
    </div>
  );
}
export default App;
