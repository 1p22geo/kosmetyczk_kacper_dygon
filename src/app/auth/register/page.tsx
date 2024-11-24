

export default function Register() {

    return (
        <div>
            <form>
                <h1>Zarejestruj się w Kosmetyczce</h1>

                <label>

                    <input className="login-input" type="text" placeholder="e-mail/nazwa"/>
                </label>
                <label>
                    <input className="login-input" type="password" placeholder="hasło"/>
                </label>
                <label>
                    <input className="login-input" type="password" placeholder="powtórz hasło"/>
                </label>
                <p>Masz już konto? <a href="login">Zaloguj się</a></p>
                <input type="submit" value="Zarejestruj się" className="submit-button"/>
            </form>
        </div>

    );
}