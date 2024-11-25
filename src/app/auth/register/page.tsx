"use client";
import { useRef, useState } from "react";

export default function Register() {
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const secondPasswordInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (
            passwordInput.current?.value == passwordInput.current?.value &&
            passwordInput.current != null
          ) {
            alert("Hasła nie są takie same");
          }

          const res = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
              username: usernameInput.current?.value,
              password: passwordInput.current?.value,
              email: emailInput.current?.value,
            }),
          });
          if (res.status == 409) alert("użytkownik już istnieje");
          if (res.status == 400)
            alert("hasło nie spełnia wymagań dotyczących bezpieczeństwa");
          if (res.status == 201) alert("stworzono użytkownika");
        }}
      >
        <h1>Zarejestruj się w Kosmetyczce</h1>

        <label>
          <input
            className="login-input"
            type="text"
            placeholder="e-mail/nazwa"
            ref={usernameInput}
          />
        </label>
        <label>
          <input className="login-input" type="password" placeholder="hasło" />
        </label>
        <label>
          <input
            className="login-input"
            type="password"
            placeholder="powtórz hasło"
            ref={passwordInput}
          />
        </label>
        <p>
          Masz już konto? <a href="login">Zaloguj się</a>
        </p>
        <input
          type="submit"
          value="Zarejestruj się"
          className="submit-button"
          ref={secondPasswordInput}
        />
      </form>
    </div>
  );
}
