# Project Breakdown: High-Level Phases

## 1. Foundations
- Create GitHub org + private repo.
- Add core team; set up README, core docs.
- Decide on main/dev branch, CODEOWNERS.
- Set up Prettier, ESLint, and initial GitHub Actions.

## 2. Discord Bot Skeleton
- Scaffold TypeScript Discord bot (discord.js).
- Add slash command support.
- Connect to Discord server (invite bot, permissions).

## 3. OpenAI Integration
- Add OpenAI API client.
- MVP: `/ask` command with prompt engineering.
- Token budgeting for cost control.

## 4. Core Features
- `/debate`: Simulate structured debate.
- `/summarize`: Summarize long posts/debates.
- `/mirror`: Steelman/devil’s advocate.

## 5. Context & Identity
- Store user worldview/style (JSON/DB).
- Prompt engineering for Socratic style.
- Context window management.

## 6. Safeguards
- Low-effort prompt detection.
- Partisanship guardrails.
- “I don’t know” and pushback logic.

## 7. Logging & Admin Tools
- Privacy-respecting prompt/topic logging.
- Optional CLI or Next.js dashboard.

## 8. Testing & Deployment
- Unit/integration tests.
- CI: lint, typecheck, test, build, deploy.
- Deploy to Railway/Render or self-hosted.

## 9. Future Enhancements
- Vector memory (Pinecone, Weaviate).
- Voice integration.
- Historical quoting.

---

**Each phase broken down further in issues and PRs as we go!**