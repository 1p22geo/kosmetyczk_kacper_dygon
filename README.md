# Aplikacja kosmetyczki

[Dokumentacja](./doc/doc.md)

## Uruchamianie

Przed uruchomieniem:

- skopiuj .env.local.example do .env.local
- wypełnij dane (MONGO_URI oraz APP_URL)

APP_URL to adres który użytkownik wpisze w przeglądarce (na przykład `http://localhost:3000` lub `https://kosmetyczka.3p.zsti.me`)

SELF_URL nie zmieniać

MONGO_URI - connection string z discorda


Następnie zainstaluj dependencje i uruchom

```
yarn install
yarn dev
```

## Deployment produkcyjny

APP_URL zmienić na pełny HTTPS URL z domeną

Zainstalować na serwerze, najlepiej w Docker, lub Docker-compose

```
yarn install --frozen-lockfile
yarn build
yarn start
```
