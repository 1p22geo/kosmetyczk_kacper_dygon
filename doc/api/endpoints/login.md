## Request (JSON encoded):
```ts
export interface LoginRoutePOSTData {
  username: string;
  password: string;
}
```
Note that `username` can be either username or email address.

They are both checked.
## Response :
```http
HTTP/1.1 201 Created
Content-type: application/json
Cookie: session=<session-id>


{ 
	"status": "session created",
	"id": "<session-id>" 
}

```

## Status codes
- 401 Unauthorized (authentication failure, wrong password or username)
- 400 Bad request (if no credentials supplied)
- 201 Created (default)

