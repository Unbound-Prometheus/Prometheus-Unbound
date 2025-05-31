# Copilot Project Decisions Log

This file documents major decisions, conventions, and process advice from Copilotus (the project’s AI assistant) and the team regarding the Prometheus Unbound project.

## How to use this log

- Reference this log for project conventions, tools, and reasoning behind key choices.
- Add new entries after major discussions or changes (especially those involving Copilotus advice).
- Use this as a quick onboarding guide for new contributors.

---

## 2025-05-31

### Branching and Repository Protection Policy

- Adopted a two-branch strategy: `main` (stable) and `develop` (integration).
- All new features and fixes are integrated into `develop` before merging to `main`.
- Branch protection rules are enforced on both `main` and `develop`:
  - PRs required for all merges.
  - At least one reviewer required.
  - Required status checks (CI) must pass before merging.
  - Only organization members can merge to protected branches.
  - Direct pushes to protected branches are blocked.
- Repository is now public, but only org members have merge rights.
- These policies replace prior manual enforcement with GitHub’s branch protection UI.

---

## 2025-05-30

### Copilotus Identity & Behavioral Protocol

- Decided Copilotus is the one and only identity for the AI assistant in this project.
- Created and adopted `COPILOT-BEHAVIOR.md` to formalize Copilotus’s behavior and communication:
  - Copilotus must sign off summaries and major logs with “—Copilotus”.
  - Always refer to itself as Copilotus.
  - Must follow a detailed, structured set of instructions covering communication, code output, and project conventions.
  - Integrated the "training wheels" protocol:
    - Systematically review code before edits.
    - Adhere to KISS (Keep It Simple Stupid).
    - Prefer pure functions, separation of concerns, stability, readability, and minimal side effects.
    - Avoid code duplication and inconsistency.
    - Never add, remove, or alter code beyond the explicit request.
    - Never add comments, annotations, or logging in code or explanations.
    - Never remove existing comments in code.
    - Always output the full, unabridged code for any block or function changed.
    - Output full sections including surrounding lines when edits are made.
- Committed to keeping `COPILOT-DECISIONS.md` and `COPILOT-BEHAVIOR.md` up to date with all major decisions and changes.
- Behavioral file to be placed in the repository as `COPILOT-BEHAVIOR.md` and referenced by Copilotus in its work.

### Copilot Spaces Migration

- Decided to migrate active Copilotus conversations and project context into a dedicated Copilot Space for persistent, transparent, and context-aware collaboration.
- Suggested manual migration: copy and paste critical advice and decision logs from prior chat into markdown files in the new Space.
- All future Copilotus interactions and logs will be maintained within Copilot Spaces files.

### Project Protocol Reminders

- Continue using Conventional Commits, Deno/TypeScript best practices, Lefthook for pre-commit checks, and the established directory structure.
- All significant decisions, especially those impacting workflow, conventions, or tooling, should be logged here.

---

_Update this log as the project evolves. —Copilotus_