# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Data structure & dynamic chapters

Tutorials are organized into **topics** and **chapters**. Chapters are kept in
separate files and **automatically discovered** during the build process.

### Folder structure:

```
src/data/topics/
├── DSA/
│   ├── index.js (topic definition with dynamic chapter loading)
│   └── chapters/
│       ├── arrays.js
│       ├── linked-lists.js
│       └── stacks.js (new chapters are auto-discovered!)
└── systemDesignLLD/
    ├── index.js
    └── chapters/
        ├── strategy-pattern.js
        └── observer-pattern.js
```

### Topic index.js (dynamic loading):

```js
// src/data/topics/DSA/index.js
const chapterModules = import.meta.glob("./chapters/*.js", { eager: true });
const chapters = Object.values(chapterModules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

export default {
  id: "DSA",
  title: "Data Structures & Algorithms",
  chapters,
};
```

### Chapter file format:

```js
// src/data/topics/DSA/chapters/arrays.js
export default {
  order: 1,  // optional: controls sort order (lower = earlier)
  id: "arrays",
  title: "Arrays",
  sections: [
    { title: "Overview", body: "..." },
    { title: "Operations", body: "...", code: "...", codeLang: "python" },
  ],
};
```

### Adding new chapters:

Simply create a new file in the `chapters/` folder and it will be automatically
discovered and included during the next build. Use the `order` field to control
chapter sequence.

### Sidebar & Navigation:

When a topic has multiple chapters, an interactive sidebar appears on the left.
The sidebar highlights the active chapter and collapses on mobile. Use the
next/previous buttons at the bottom of each chapter to navigate between them.

### Syntax Highlighting:

Code blocks use `react-syntax-highlighter` with the Dracula theme. Specify the
language with the `codeLang` property on sections with code (e.g., `"python"`,
`"javascript"`, `"java"`).
