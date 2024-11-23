## Request:
```http
GET /user/<user-id> HTTP/1.1
Host: localhost
Cookies: session=<session-cookie>
```

## Response (JSON encoded):
```ts
export interface UserRouteResponse {
  type: string;
  user: {
    _id: ObjectId;
    username: string;
    email: string;
    type: string;
  };
}
```

## Status codes
- 401 Unauthorized (if no session cookie or not logged in)
- 404 Not Found (if no such user found)
