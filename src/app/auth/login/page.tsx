
import "../auth.css";

export default function Login() {

    return (
        <div>
            <form>
                    <h1>Zaloguj się do Kosmetyczki</h1>

                    <label>

                        <input className="login-input" type="text" placeholder="e-mail/nazwa"/>
                    </label>
                    <label>
                        <input className="login-input" type="password" placeholder="hasło"/>

                    </label>
                <label>
                    <input
                        type="checkbox"

                    />&nbsp;Pokaż hasło
                </label>
                    <p>Nie masz jeszcze konta? <a href="register">Zarejestruj się</a></p>
                    <p>Zapomniałeś hasła? <a href="password-reset">Zresetuj hasło</a></p>
            </form>
        </div>

    );
}