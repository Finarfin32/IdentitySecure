import "./App.css";
import { useEffect, useState } from "react";
import { createUser } from "./api.js";
import { useDispatch } from "react-redux";
import QrCodeGenerator from "./qrCodeGenerator.jsx";

function Register() {
  let faceio = new faceIO("fioa8bc1");
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    faceio = new faceIO("fioa8bc1");
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      setToken(response.facialId);
      console.log(` Unique Facial ID: ${response.facialId}
    Enrollment Date: ${response.timestamp}
    Gender: ${response.details.gender}
    Age Approximation: ${response.details.age}`);
      const user = { email: email, token: response.facialId };
      console.log(user);
      const users = await dispatch(createUser(user));
      console.log(users);
    } catch (err) {
      setError("Coś poszło nie tak...");
      console.log(err);
    }
  };
  return (
    <div>
      {!token && (
        <form onSubmit={handleSignIn}>
          <label className="label_email">Podaj E-mail</label>
          <input
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <button className="reg" type="submit">Zarejestruj się</button>
          <p style={{ color: "red" }}>{error}</p>
        </form>
      )}
      {token && <QrCodeGenerator token={token}></QrCodeGenerator>}
    </div>
  );
}

export default Register;
