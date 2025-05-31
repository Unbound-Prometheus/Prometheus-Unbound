# GitHub Organization & Repo Setup

## 1. Create Organization

- Go to GitHub → “Your organizations” → New organization.
- Choose “Private” for now.
- Name: e.g., `socratic-bot` or `debate-ai`
- Add team members (by GitHub handle).

## 2. Repository Setup

- New repo: `socrates-bot`
- Initialize with:
  - README.md (see provided file)
  - .gitignore (Node.js)
  - LICENSE (MIT or similar)
- Protect `main`/`develop` branches.
- Restrict PRs to org members only.
- Require PRs for all merges.
- Set up CODEOWNERS for review rules.

## 3. Issue & PR Templates

- Add `.github/ISSUE_TEMPLATE/feature.yml` and `bug.yml`
- Add `.github/PULL_REQUEST_TEMPLATE.md`

## 4. GitHub Actions

- See `.github/workflows/` for CI setup (lint/test/build/deploy).

---

**Questions? Ping your Copilot!**
