## Request:
```http
GET /session HTTP/1.1
Host: localhost
Cookies: session=<session-cookie>
```

## Response (JSON encoded):
```ts
export interface UserRouteResponse {
  type: string;
  session: {
    _id: ObjectId;
    user: string;
    created: number;
    expire: number;
  };
}
```

## Status codes
- 404 Not Found (if no session cookie or not logged in)

## Also see:
- [/session/\<id\>](./session-id.md)