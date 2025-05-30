# Contribution Workflow & CI/CD

## Branching

- `main`: stable, deployable
- `develop`: active dev
- Feature branches: `feature/<desc>`, `bugfix/<desc>`

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

**Iterate, review, and keep learning!**