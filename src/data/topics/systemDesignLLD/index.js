// System Design LLD topic - chapters are dynamically imported from the chapters/ folder
// No need to manually add each chapter file; Vite's import.meta.glob discovers them

// Dynamically import all chapter files from the chapters/ folder
const chapterModules = import.meta.glob("./chapters/*.js", { eager: true });

// Extract default exports and sort by order or filename
const chapters = Object.values(chapterModules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

export default {
  id: "LLD",
  title: "System Design - Low Level Design (LLD)",
  subtitle: "Design patterns and object-oriented design principles",
  chapters,
  footer:
    "Mastering design patterns strengthens your LLD skills for interviews and real-world systems.",
};
