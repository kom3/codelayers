// This module gathers every tutorial file under `topics` and
// exports an array of tutorial objects. Topic files are in the
// root of each topic folder (e.g., `src/data/topics/DSA/index.js`).
// Chapters are kept in separate files under a `chapters/` subfolder
// and imported into the topic index.

// Using Vite's import.meta.glob to make the list extensible;
// any new topic file added under `src/data/topics/*/index.js` will be
// automatically included when you rebuild. The glob pattern matches
// only topic index files, not chapter files.

const modules = import.meta.glob("./topics/*/index.js", { eager: true });

// modules is an object whose values are the module exports.
// we expect each module to have a default export that is the
// tutorial data itself (topics with chapters already imported).
const tutorials = Object.values(modules)
	.map((m) => m.default)
	// optionally filter out anything falsy or uninitialized
	.filter(Boolean);

export default tutorials;

// Example of a topic structure with separate chapter files.
// Topics are organized as:
//
// src/data/topics/DSA/
//   ├── index.js (topic metadata + chapter imports)
//   └── chapters/
//       ├── arrays.js (chapter with sections)
//       └── linked-lists.js (chapter with sections)
//
// Topic index.js example:
//
// import arraysChapter from './chapters/arrays';
// import linkedListsChapter from './chapters/linked-lists';
//
// export default {
//   id: 'DSA',
//   title: 'Data Structures & Algorithms',
//   chapters: [arraysChapter, linkedListsChapter],
// };
//
// Chapter file (e.g. arrays.js) structure:
//
// export default {
//   id: 'arrays',
//   title: 'Arrays',
//   sections: [
//     { title: 'Overview', body: 'Arrays are...' },
//     { title: 'Operations', body: 'Common ops...' }
//   ]
// };

