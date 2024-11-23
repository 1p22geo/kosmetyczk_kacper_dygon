```ts
interface Session{
    user: string;
    created: number; //UNIX timestamp of user creation - Date.now() for instance
    expire: number; // UNIX timestamp of session expiry
}
```