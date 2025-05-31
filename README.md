# Socrates Discord AI Bot

Welcome! This project aims to create a Socratic AI chatbot for our private Discord server, designed to foster thoughtful debate and challenge echo chambers.

## Project Vision

- **Engage in rational, open-minded dialogue.**
- **Support structured debates and nuanced Q&A.**
- **Act as a “devil’s advocate” or “steelman” when needed.**
- **Summarize and reflect on discussions.**
- **Prioritize privacy, cost-effectiveness, and open source principles.**

## Wishlist & Requirements

- Deployed as a Discord bot via OpenAI API.
- Token-efficient and nuanced.
- Supports `/ask`, `/debate`, `/summarize`, `/mirror` commands.
- Remembers user worldviews and style.
- Promotes rational discourse.
- Guardrails against low-effort or partisan prompts.
- Logging and optional admin dashboard.
- Future: vector memory, voice, historical quoting.

---

## Branch Strategy & Workflow (Updated 2025-05-31)

We use a two-branch model:

- **main**: always stable, production-ready code.
- **develop**: integration branch for new features and fixes.

**All new work is merged into `develop` via Pull Requests (PRs) with required reviews.**  
After testing and review, releases are promoted from `develop` to `main`.

- Branch protection rules are enforced on both `main` and `develop`.
- Only organization members may merge PRs.
- Direct pushes to protected branches are blocked.

For more, see [WORKFLOW.md](./docs/WORKFLOW.md) and [HANDBOOK.md](./docs/HANDBOOK.md).

---

## Project Phases

See [PHASES.md](./PHASES.md) for a high-level breakdown and actionable steps.

## Tech Stack

See [TECH-STACK.md](./TECH-STACK.md) for rationale and alternatives.

## Contribution Workflow

See [WORKFLOW.md](./docs/WORKFLOW.md) for our dev process, PR, and CI/CD info.

---

**Let’s build something amazing together!**