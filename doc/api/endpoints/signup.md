## Request (JSON encoded):
```ts
export interface SignupRoutePOSTData {
  username: string;
  password: string;
  email: string;
}
```

## Response :
```http
HTTP/1.1 201 Created
Content-type: application/json
Cookie: session=<session-id>


{ 
	"status": "user created",
	"id": "<session-id>" 
}

```

## Status codes
- 409 Conflict (if user already exists)
- 400 Bad request (if password fails security check)
- 201 Created (default)