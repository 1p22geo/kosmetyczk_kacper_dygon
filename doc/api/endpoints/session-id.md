## Request:
```http
GET /session/<session-id> HTTP/1.1
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
- 404 Not Found (if no session found)

## Also see:
- [/session](./session.md)