import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log({ username: username, password: password });
    history.push("/");
  }

  return (
    <div className="login-upper bg-login">
      <div className="row">
        <div className="col-12">
          <div className="card card-login">
            <div className="login-title">
              <p className="m-2">CATARCO</p>
            </div>
            <div className="card-body">
              <h3 className="text-center mb-3">Login</h3>
              <form
                className="form-row text-left"
                onSubmit={() => handleLogin()}
              >
                <div className="col-12 mb-2">
                  <label for="user" className="form-label">
                    Usuário
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome de usuário"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="col-12 mb-2">
                  <label for="user" className="form-label">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Insira sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-12 mt-3 mb-2 text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
