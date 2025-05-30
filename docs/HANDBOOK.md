# Prometheus Unbound Handbook

Welcome to the Prometheus Unbound project!  
This handbook outlines our most important conventions and best practices.  
For questions, open an issue or reach out to a maintainer.

---

## Project Purpose

Prometheus Unbound is a Socratic Discord AI chat bot, built with Deno, Discordeno, and OpenAI.

---

## Commit Message Style

We use the **conventional commits** format:

```
<type>(optional scope): short summary

[Optional body]
```

**Types**:
- `feat`: New features
- `fix`: Bug fixes
- `chore`: Tooling, build, infra, config, dependencies
- `docs`: Documentation changes
- `refactor`: Refactoring code (no user-facing change)
- `test`: Adding or fixing tests
- `style`: Formatting, whitespace, or non-functional code style changes
- `perf`: Performance improvement

**Examples**:
```
feat: add OpenAI integration to /ask command
chore: configure Discord slash command registration for Deno bot
fix(commands): handle empty /ask queries gracefully
docs: update setup instructions for Deno runtime
```

---

## Branching & Pull Requests

- Use feature branches: `feature/<short-description>`, `fix/<short-description>`, etc.
- Open a Pull Request early (as a draft) for visibility.
- Reference related issues in your PR description.
- PRs should be reviewed by at least one maintainer before merge.

---

## Coding Style

- Use [Deno](https://deno.com/) and [Discordeno](https://deno.land/x/discordeno) best practices.
- Run `deno lint` and `deno fmt` before committing.
- Prefer explicit, readable code and comments for public functions/classes.

---

## Pre-commit Hooks & Automation

- **Lefthook** is required for managing pre-commit checks.
  - Automatically runs `deno lint` and `deno fmt --check` on staged `.ts` files prior to every commit.
  - See `lefthook.yml` and the provided installation script for setup instructions.
  - To install:  
    1. Install Lefthook globally if not already (`brew install lefthook` or see [Lefthook docs](https://github.com/evilmartians/lefthook)).  
    2. Run `lefthook install` in the repository root.
  - All contributors must ensure pre-commit hooks are enabled and passing prior to any PR.

---

## Copilotus & Project AI Collaboration

- The project uses a dedicated AI assistant named **Copilotus** for code review, documentation, and project guidance.
- Copilotus follows a strict behavioral protocol for code edits, summaries, and advice; see `COPILOT-BEHAVIOR.md` for details.
- Major project decisions and protocols are logged in `COPILOT-DECISIONS.md`.

---

## Directory Structure & .gitignore

- Source code lives in `src/`, with commands in `src/commands/`.
- The root contains configuration, documentation, and meta files.
- `.gitignore` covers Deno cache, lock files, system files, environment files, and Lefthook artifacts.
- If environment variables are used, a `.env.example` file must be provided and maintained.

---

## Contributing

1. Fork the repo or make a new branch.
2. Write clear, conventional commit messages.
3. Run all checks (`deno lint`, `deno fmt`, any tests).
4. Ensure pre-commit hooks pass for all staged files.
5. Open a Pull Request and request review.

---

## Getting Help

- Open an [issue](https://github.com/ujbolivar/Prometheus-Unbound/issues) for bugs, features, or questions.
- Use Discord or project chat if available for quick questions.

---

## Documentation & Decision Logs

- Key project conventions and decisions are tracked in `COPILOT-DECISIONS.md`.
- Copilotus's operating guidelines are found in `COPILOT-BEHAVIOR.md`.
- Contributors are encouraged to expand this handbook as the project grows!

---