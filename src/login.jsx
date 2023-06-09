import "./App.css";
import { useEffect, useState } from "react";
import { createUser, getUsers } from "./api.js";
import { useDispatch } from "react-redux";
import QRReader from "./qrCodeReader.jsx";

function Login() {
  let faceio;
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const [tokenFromQR, setTokenFromQR] = useState(null);
  const [email, setEmail] = useState("");
  useEffect(() => {
    faceio = new faceIO("fioa8bc1");
  }, []);

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });
      setToken(response.facialId);
      console.log(` Unique Facial ID: ${response.facialId}
        PayLoad: ${response.payload}
        `);
      const users = await dispatch(getUsers());
      users.payload.map((user) => {
        if (user["token"].toString() === response.facialId)
          setEmail(user.email);
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (token === tokenFromQR && token && tokenFromQR)
    return <div className="register_succesfull">Pomyślnie zalogowano użytkownika {email}</div>;
  return (
    <div className="container">
      {!token && <button className="log" onClick={handleLogIn}>Zaloguj się</button>}
      {token && <QRReader setQR={setTokenFromQR}></QRReader>}
    </div>
  );
}

export default Login;
