# Tech Stack & Rationale

## Core Stack

- **TypeScript/Node.js**: Type-safe, modern JS, great for both backend and CLI tools.
- **discord.js**: Mature, well-documented Discord API library.
- **OpenAI API**: Function-calling, prompt engineering, cost controls.
- **File/JSON for memory**: Simple for MVP; upgradeable.
- **Jest/Vitest**: Fast, modern JS/TS testing.
- **ESLint/Prettier**: Linting and code formatting.
- **GitHub Actions**: CI/CD for lint, test, build, deploy.
- **(Optional) Next.js + Tailwind**: For admin dashboard or logs.

## Why Not Python?

- TypeScript offers better type safety for larger collaborative JS codebases.
- Discord/TS ecosystem is robust and well-supported for bots.
- Your team has JS/TS and C experience—good bridge stack.

## Alternatives Considered

- **Python** (discord.py, FastAPI): Great, but less type safety, less “monolithic” feel for fullstack JS.
- **Go, Rust**: Overkill for early stage, but could be fun to explore for learning.
- **Deno/Bun**: Future friendly; stick to Node.js for widest compatibility.

## Hosting

- **Railway/Render/Fly.io**: Free/cheap, Discord bot-friendly.
- **Self-hosted VPS**: For tinkerers, but more upkeep.

---

**Open to changes as team needs evolve!**