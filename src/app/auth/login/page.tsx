"use client";
import { useRef, useState } from "react";
import { redirect } from "next/navigation";

export default function Login() {
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const showPasswordCheck = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
              username: usernameInput.current?.value,
              password: passwordInput.current?.value,
            }),
          });
          if (res.status == 401) alert("złe hasło lub nazwa użytkownika");
          if (res.status == 400) alert("podaj hasło i nazwę użytkownika");
          if (res.status == 201) {
            alert("zalogowano");
            redirect("/home");
          }
        }}
      >
        <h1>Zaloguj się do Kosmetyczki</h1>

        <label>
          <input
            className="login-input"
            type="text"
            placeholder="e-mail/nazwa"
            ref={usernameInput}
          />
        </label>
        <label>
          <input
            className="login-input"
            type={showPassword ? "text" : "password"}
            placeholder="hasło"
            ref={passwordInput}
          />
        </label>
        <label>
          <input
            type="checkbox"
            ref={showPasswordCheck}
            onChange={() => {
              setShowPassword(!!showPasswordCheck.current?.checked);
            }}
          />
          &nbsp;Pokaż hasło
        </label>
        <p>
          Nie masz jeszcze konta? <a href="register">Zarejestruj się</a>
        </p>
        <p>
          Zapomniałeś hasła? <a href="password-reset">Zresetuj hasło</a>
        </p>
        <input type="submit" value="Zaloguj się" className="submit-button" />
      </form>
    </div>
  );
}
