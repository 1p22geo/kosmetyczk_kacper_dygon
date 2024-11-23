```ts
interface Zabieg{
    _id: ObjectId;
    klient: ObjectId; //może być także string; horyzontalny lookup do kolekcji `users`
    pracownik: ObjectId;
    godzina: number; //UNIX timestamp
    czas_trwania: number; //czas trwania w dowolnej jednostce (minutach)
}
```
