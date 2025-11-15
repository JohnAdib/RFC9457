# rfc9457

A TypeScript-first error handling package implementing [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html) - Problem Details for HTTP APIs.

## Features

- **RFC 9457 Compliant** - Strictly follows the Problem Details specification
- **TypeScript First** - Full type safety with excellent IDE support
- **Auto-normalization** - Accepts `unknown` errors and normalizes them automatically
- **Dual API** - Choose between flat (`error.*`) or categorized (`errors.client.*` / `errors.server.*`) APIs
- **Framework Agnostic** - Works with Express, Hono, Fastify, and any Node.js framework
- **Zero Dependencies** - Lightweight with no external dependencies
- **ESM Only** - Modern ES Modules for Node.js 22+

## Installation

```bash
npm install rfc9457
```

## Quick Start

### Flat API (Simple & Quick)

```typescript
import { error } from "rfc9457";

throw error.authentication("Invalid token");
throw error.notFound("User", "123");
throw error.validation("Email is required");
```

### Categorized API (Explicit)

```typescript
import { errors } from "rfc9457";

throw errors.client.authentication("Invalid token");
throw errors.client.notFound("User", "123");
throw errors.server.internal("Database connection failed");
```

## Available Errors

### Client Errors (4xx)

| Method | Status | Description | Example |
|--------|--------|-------------|---------|
| `badRequest` | 400 | Malformed request | `error.badRequest("Invalid JSON")` |
| `authentication` | 401 | Missing/invalid credentials | `error.authentication("Token expired")` |
| `authorization` | 403 | Insufficient permissions | `error.authorization("Admin access required")` |
| `notFound` | 404 | Resource not found | `error.notFound("User", "123")` |
| `methodNotAllowed` | 405 | HTTP method not allowed | `error.methodNotAllowed("POST not allowed")` |
| `conflict` | 409 | Resource conflict | `error.conflict("Email already exists")` |
| `validation` | 422 | Invalid input data | `error.validation("Invalid email", { email: ["Invalid format"] })` |
| `rateLimit` | 429 | Too many requests | `error.rateLimit("Rate limit exceeded", 60)` |

### Server Errors (5xx)

| Method | Status | Description | Example |
|--------|--------|-------------|---------|
| `internal` | 500 | Internal server error | `error.internal(caughtError)` |
| `notImplemented` | 501 | Feature not implemented | `error.notImplemented("Feature not available")` |
| `badGateway` | 502 | External service error | `error.badGateway(stripeError, "Stripe")` |
| `serviceUnavailable` | 503 | Service temporarily unavailable | `error.serviceUnavailable("Database down", 60)` |
| `gatewayTimeout` | 504 | External service timeout | `error.gatewayTimeout("Payment timeout", "Stripe")` |

## Usage Examples

### Basic Error Throwing

```typescript
import { error } from "rfc9457";

if (!user) {
  throw error.notFound("User", userId);
}

if (!hasPermission) {
  throw error.authorization("Admin access required");
}
```

### Auto-Normalization

The package automatically normalizes any value to a string:

```typescript
import { error } from "rfc9457";

try {
  await externalAPI.call();
} catch (err) {
  throw error.badGateway(err, "External API");
}
```

### Validation Errors

```typescript
import { error } from "rfc9457";

const validationErrors = {
  email: ["Invalid email format", "Email already exists"],
  password: ["Password too weak"],
};

throw error.validation("Validation failed", validationErrors);
```

### NotFound with Auto-formatting

```typescript
import { error } from "rfc9457";

throw error.notFound("User", "123");

throw error.notFound("Custom message: User not found in database");
```

## Framework Integration

### Express

```typescript
import express from "express";
import { error, isHttpError } from "rfc9457";

const app = express();

app.get("/users/:id", async (req, res) => {
  const user = await db.users.findById(req.params.id);

  if (!user) {
    throw error.notFound("User", req.params.id);
  }

  res.json(user);
});

app.use((err, req, res, next) => {
  if (isHttpError(err)) {
    return res.status(err.status).json(err.toJSON());
  }

  const internalError = error.internal(err);
  res.status(500).json(internalError.toJSON());
});
```

### Hono

```typescript
import { Hono } from "hono";
import { error, isHttpError } from "rfc9457";

const app = new Hono();

app.get("/users/:id", async (c) => {
  const user = await db.users.findById(c.req.param("id"));

  if (!user) {
    throw error.notFound("User", c.req.param("id"));
  }

  return c.json(user);
});

app.onError((err, c) => {
  if (isHttpError(err)) {
    return c.json(err.toJSON(), err.status);
  }

  const internalError = error.internal(err);
  return c.json(internalError.toJSON(), 500);
});
```

## Configuration

### Environment Variable

Set the base URL for error type URIs:

```bash
export RFC9457_BASE_URL=https://api.example.com/errors
```

### Programmatic Configuration

```typescript
import { configure } from "rfc9457";

configure({
  baseUrl: "https://api.example.com/errors",
  includeStack: process.env.NODE_ENV === "development",
});
```

## Error Response Format

All errors follow RFC 9457 structure:

```json
{
  "type": "about:blank#not-found",
  "title": "Not Found",
  "status": 404,
  "detail": "User 123 not found"
}
```

With custom base URL:

```json
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "Validation failed",
  "validationErrors": {
    "email": ["Invalid email format"]
  }
}
```

## TypeScript Support

Full type safety and IDE autocomplete:

```typescript
import { error, isHttpError, ValidationError } from "rfc9457";

const err = error.validation("Invalid data");

if (isHttpError(err)) {
  console.log(err.status);
  console.log(err.toJSON());
}
```

## API Reference

### Error Namespace

```typescript
import { error } from "rfc9457";
```

### Categorized Errors Namespace

```typescript
import { errors } from "rfc9457";
```

### Individual Error Classes

```typescript
import {
  BadRequestError,
  AuthenticationError,
  ValidationError,
} from "rfc9457";

throw new ValidationError("Invalid email");
```

### Helpers

```typescript
import { isHttpError, configure, getConfig } from "rfc9457";
```

## Development

```bash
npm install
npm run build
```

## License

MIT