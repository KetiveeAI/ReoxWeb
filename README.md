# Reox Programming Language Website

The official website for the Reox programming language ("The Native Language of NeolyxOS"). Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Bun](https://bun.sh).

## ✨ Features

- **Modern Landing Page**: High-performance, dark-themed design with glassmorphism.
- **Code Preview**: Interactive syntax highlighting visualization.
- **Responsive**: Optimized for all device sizes.
- **Features & Comparison**: Detailed breakdown of Reox vs C++/Python/Swift.
- **License Page**: Integrated Apache 2.0 license info.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) (Package Manager & Runtime)

### Installation

```bash
bun install
```

### Running Locally

> [!WARNING]
> **Dev Server Limitation**: Running `bun run dev` currently crashes on some systems due to an OS file watch limit (`ENOSPC`) with Turbopack.
> **Workaround**: Use the production build command below, which bypasses the watcher limit.

To run the site locally on port **4000**:

```bash
bun run start
# or explicitly:
bun run start -- -p 4000
```

Visit [http://localhost:4000](http://localhost:4000).

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Runtime**: Bun
- **Icons**: Custom SVGs

## 📄 License

Based on the Apache License 2.0. See `/license` page for details.
