# Contribution Workflow & CI/CD

## Branching

- `main`: stable, deployable
- `develop`: active dev
- Feature branches: `feature/<desc>`, `bugfix/<desc>`

---

## Branch Protection & Permissions (Updated 2025-05-31)

- **Branch protection rules are enforced on both `main` and `develop`.**
- All merges must be performed via Pull Request (PR).
- PRs require at least one review and all required CI checks to pass before merging.
- Only organization members can merge PRs to protected branches.
- Direct pushes to `main` and `develop` are blocked.

## PR Process

1. Fork + branch or branch from `develop`
2. Code, commit (descriptive messages!)
3. Lint, typecheck, test locally
4. Open PR to `develop`
5. CI runs: lint, typecheck, test, build
6. Team review (CODEOWNERS)
7. Merge on approval; auto-deploy if on `main`

## DevOps Pipeline (GitHub Actions)

- Lint: ESLint/Prettier
- Typecheck: tsc
- Test: Jest/Vitest
- Build: tsc
- Deploy: on push to `main`

## Quality Assurance

- Automated checks required to merge to `main`
- PR template ensures description, test plan, screenshots/logs

---

## Contribution Checklist

1. Branch from `develop` for new work.
2. Make and commit your changes.
3. Open a PR to `develop`.
4. Ensure all CI checks pass.
5. Request review from another org member.
6. Once approved, merge via the PR interface.
7. After release testing, merge `develop` to `main` via PR for production.

---

**Iterate, review, and keep learning!**