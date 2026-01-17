# Contributing to ReoxWeb

Thank you for your interest in contributing to the official Reox language website! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the Repository:** Click the "Fork" button on [GitHub](https://github.com/KetiveeAI/ReoxWeb).
2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ReoxWeb.git
   cd ReoxWeb
   ```
3. **Install Dependencies:**
   ```bash
   bun install
   ```
4. **Create a Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
bun run dev
```

The site will be available at `http://localhost:3000`.

### Building for Production

```bash
bun run build
```

Ensure the build passes before submitting a PR.

---

## How to Contribute

### Reporting Bugs

- Search [existing issues](https://github.com/KetiveeAI/ReoxWeb/issues) first.
- If none exist, open a new issue with:
  - A clear, descriptive title.
  - Steps to reproduce the bug.
  - Expected vs. actual behavior.
  - Screenshots if applicable.

### Suggesting Features

- Open an issue with the `enhancement` label.
- Describe the feature and its use case.
- Discuss before implementing to avoid wasted effort.

### Improving Documentation

- Fix typos or clarify existing docs.
- Add new guides or tutorials.
- Ensure code examples are accurate and follow Reox syntax.

### Submitting Code

1. Make your changes in a feature branch.
2. Write clear, concise commit messages.
3. Ensure the build passes: `bun run build`.
4. Open a Pull Request against `main`.
5. Describe your changes in the PR description.

---

## Code Style

- **TypeScript/TSX:** Follow existing patterns in `app/`.
- **Tailwind CSS:** Use utility classes; avoid custom CSS unless necessary.
- **Components:** Keep components small and focused.
- **Naming:** Use descriptive names for files and functions.

---

## Commit Messages

Use clear, conventional commit messages:

```
feat: Add package search functionality
fix: Correct typo in installation docs
docs: Update API reference for Events
chore: Update dependencies
```

---

## Code of Conduct

Please be respectful and constructive. We follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

---

## Questions?

If you have questions, feel free to:

- Open a GitHub Discussion.
- Join our Discord server (link on `/community` page).

Thank you for contributing!
