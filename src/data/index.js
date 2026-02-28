// This module gathers every tutorial file under `topics` and
// exports an array of tutorial objects. Each topic file should
// `export default` a configuration object (basically JSON) with
// at least an `id` and `title` field.

// using Vite's import.meta.glob to make the list extensible;
// any new file added under `src/data/topics/**` will be
// automatically included when you rebuild.

const modules = import.meta.glob("./topics/**/*.js", { eager: true });

// modules is an object whose values are the module exports.
// we expect each module to have a default export that is the
// tutorial data itself.
const tutorials = Object.values(modules)
	.map((m) => m.default)
	// optionally filter out anything falsy or uninitialized
	.filter(Boolean);

export default tutorials;

// Example of a single topic file (for reference, create similar
// files under `src/data/topics/<slug>/index.js`):
//
// export default {
//   id: 'DSA',
//   title: 'Data Structures & Algorithms',
//   subtitle: 'Core concepts for interviews',
//   sections: [
//     { title: 'Arrays', body: 'Arrays are...', note: 'O(1) access' },
//     { title: 'Linked Lists', body: 'Singly and doubly...', footer: 'Next: Stacks' }
//   ],
//   footer: 'Happy learning!'
// };
