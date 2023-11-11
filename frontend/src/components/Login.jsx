import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../modules/fetch";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Panggil fungsi loginUser dari modules/fetch untuk melakukan login
      const token = await loginUser(email, password);

      // Simpan token di localStorage atau sesuai kebutuhan
      localStorage.setItem("token", token.token);

      // Redirect ke halaman setelah login (misalnya, halaman daftar buku)
      navigate("/books");
    } catch (error) {
      // Tangani error yang mungkin terjadi
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
