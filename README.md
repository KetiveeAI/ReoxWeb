<p align="center">
  <img src="public/logo.svg" alt="Reox Logo" width="100" height="100">
</p>

<h1 align="center">ReoxWeb</h1>

<p align="center">
  <strong>The Official Website for the Reox Programming Language</strong>
</p>

<p align="center">
  <a href="https://reox.ketivee.com">Website</a> •
  <a href="https://reox.ketivee.com/docs">Documentation</a> •
  <a href="https://reox.ketivee.com/packages">Packages</a> •
  <a href="https://reox.ketivee.com/blog">Blog</a>
</p>

---

## About Reox

**Reox** is a modern, statically-typed programming language built for **NeolyxOS**. It combines the simplicity of Swift with the low-level control of C, featuring a unique **AI-native** syntax and a **declarative UI** framework for building native desktop applications.

### Key Language Features

| Feature               | Description                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| **Compiled to C**     | The `reoxc` compiler (written in Rust) transpiles Reox to high-performance C code.       |
| **Zero Dependencies** | The standard library and compiler have no external dependencies for maximum stability.   |
| **AI-Native Syntax**  | Built-in constructs for defining and interacting with AI assistants.                     |
| **Declarative UI**    | Define native desktop interfaces with a React-like component model and state management. |
| **Pattern Matching**  | Elegant, exhaustive pattern matching for control flow and data extraction.               |
| **Memory Safe**       | Ownership and borrowing concepts prevent common memory errors at compile time.           |

### Syntax Preview

```reox
// Hello World
fn main() {
    println("Hello from Reox!");
    return 0;
}

// Declarative UI
fn main() -> int {
    let app = app_new("Calculator");
    let win = app_create_window(app, "Calculator", 400, 300);

    let stack = vstack(12.0);
    let input = text_field("Enter a number");
    let btn = button_view("Calculate");

    view_add_child(stack, input);
    view_add_child(stack, btn);
    window_set_root(win, stack);

    app_run(app);
    return 0;
}
```

---

## About This Repository

This repository contains the source code for **reox.neolyx.os**, the official website for the Reox programming language. The site is built with modern web technologies and serves as the primary resource for Reox developers.

### Website Features

- **📚 Documentation:** Comprehensive guides for syntax, API references (Layout, Widgets, Events), and tutorials.
- **📦 Package Registry:** Browse and search the Reox ecosystem for libraries and tools.
- **📝 Blog:** News, release announcements, and technical articles from the Reox team.
- **⬇️ Download Center:** Installation instructions for NeolyxOS, Linux, and macOS.
- **🏛️ Community Hub:** Links to GitHub, Discord, and other community resources.

---

## Tech Stack

| Technology                                    | Purpose                              |
| --------------------------------------------- | ------------------------------------ |
| [Next.js 15](https://nextjs.org)              | React Framework (App Router)         |
| [Tailwind CSS v4](https://tailwindcss.com)    | Utility-First CSS                    |
| [Bun](https://bun.sh)                         | JavaScript Runtime & Package Manager |
| [TypeScript](https://www.typescriptlang.org/) | Static Type Checking                 |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.0+)

### Installation

```bash
# Clone the repository
git clone https://github.com/KetiveeAI/ReoxWeb.git
cd ReoxWeb

# Install dependencies
bun install
```

### Development

```bash
# Start the development server
bun run dev
```

The site will be available at `http://localhost:3000`.

### Production Build

```bash
# Build for production
bun run build

# Start production server
bun run start
```

---

## Project Structure

```
ReoxWeb/
├── app/                    # Next.js App Router pages
│   ├── blog/               # Blog section
│   ├── community/          # Community links
│   ├── docs/               # Documentation
│   │   ├── api/            # API Reference (Layout, Widgets, Events)
│   │   ├── installation/
│   │   ├── quickstart/
│   │   └── syntax/
│   ├── download/           # Download & Installation
│   ├── packages/           # Package Registry
│   └── page.tsx            # Home Page
├── public/                 # Static assets (logo, icons)
└── ...
```

---

## Contributing

We welcome contributions from the community! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get involved.

### Ways to Contribute

- **Report Bugs:** Open an issue on GitHub.
- **Improve Documentation:** Submit a PR with corrections or additions.
- **Add Features:** Discuss new features in an issue before submitting a PR.

---

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Built with ❤️ for the NeolyxOS ecosystem</strong>
</p>
<p align="center">
  © 2025-2026 KetiveeAI
</p>
