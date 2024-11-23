## Request:
```http
GET /user HTTP/1.1
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
  session: {
    _id: ObjectId;
    user: string;
    created: number;
    expire: number;
  };
}
```


Refer to schema for user types
## Status codes
- 401 Unauthorized (if no session cookie or not logged in)
- 404 Not Found (if aggregation fails, the error is hidden)