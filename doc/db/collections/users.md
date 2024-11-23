```ts
interface User{
    _id: ObjectId; // mongoDB oID dtype
    username: string;
    email: string;
    hash: string; // bcrypt w/ 14 iterations
    type: string;
}
```

Dozwolone typy użytkowników:
- `"klient"`
- `"pracownik"`
- `"administrator"`

