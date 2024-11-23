```ts
interface Session{
    _id: ObjectId; // mongoDB oID dtype
    user: string;
    created: number; //UNIX timestamp of session creation - Date.now() for instance
    expire: number; // UNIX timestamp of session expiry
}
```