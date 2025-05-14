# Token Bucket Rate Limiting (Node.js + Redis)

A simple and powerful prototype that demonstrates **Token Bucket–based rate limiting** using:

- Express.js with TypeScript
- Redis (via Upstash) as a backend store
- Middleware-based throttling for real-world APIs

---

## What is Token Bucket Algorithm?

The **Token Bucket Algorithm** is used to **control the rate of incoming requests**.

### How It Works:

- A virtual **bucket** holds tokens (think of them as access credits).
- Each incoming request **consumes 1 token**.
- **Tokens are refilled over time** at a fixed rate.
- If no tokens are available, the request is **rate-limited (HTTP 429)**.
- The bucket has a **max capacity**, so tokens can&apos;t overflow.

This allows **bursty traffic** within limits while still enforcing an average rate over time.

---

## What This Prototype Shows

You get **two endpoints** demonstrating different rate-limiting strategies:

### `/limit-by-ip`

- Each user (identified by IP) has their own **separate bucket**.
- Prevents abuse by individual users.

### `/limit-global`

- All requests share a **single global token bucket**.
- Useful for protecting your infrastructure from overall load.

---

## Tech Stack

| Layer         | Tool                   |
| ------------- | ---------------------- |
| Backend       | Node.js + Express      |
| Language      | TypeScript             |
| Rate Limiting | Token Bucket Algorithm |
| Storage       | Redis via Upstash      |
| Package Mgr   | pnpm                   |

---

## Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd token-bucket-rate-limiter
```

### 2. install dependencies

```bash
pnpm install
```

### 3. Configure Upstash Redis

```bash
UPSTASH_REDIS_REST_URL=https://your-upstash-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```

### 4. Run in Development

```bash
pnpm dev
```

### Visit:

http://localhost:3000/limit-by-ip

http://localhost:3000/limit-global

Try hitting these routes repeatedly and observe rate limiting in action!
