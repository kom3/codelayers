// example tutorial data for DSA. you can edit/extend this or
// add additional topics with the same shape.
export default {
	id: "DSA",
	title: "Data Structures & Algorithms",
	subtitle: "Core building blocks for coding interviews",
	sections: [
		{
			title: "Arrays",
			body: "An array is a contiguous block of memory that holds elements of the same type. Access by index is O(1).",
			note: "In JavaScript arrays are dynamic and can hold mixed types, but it's best to think of them conceptually as a fixed-size buffer.",
		},
		{
			title: "Common Array Operations",
			body: "Common operations on arrays and their typical time complexities:\n\nBelow we list some operations, show a short code example, and summarize complexity in a small table.",
			note: [
				"Access by index — O(1)",
				"Push (append) — amortized O(1)",
				"Insert/delete at middle — O(n)",
			],
			code: `// JavaScript examples\nconst arr = [1,2,3];\n// access\nconst x = arr[1]; // 2\n// push\narr.push(4);\n// insert in middle (costly)\narr.splice(1, 0, 99);\nconsole.log(arr);`,
			codeLang: "javascript",
			table: {
				headers: ["Operation", "Time Complexity"],
				rows: [
					["Access by index", "O(1)"],
					["Push (append)", "Amortized O(1)"],
					["Insert/delete (middle)", "O(n)"],
				],
			},
		},
		{
			title: "Linked Lists",
			body: "A linked list is a sequence of nodes where each node points to the next. Insertion and deletion are efficient when you have a reference to the node.",
			footer: "Next: stacks and queues",
		},
	],
	footer: "Good luck with your practice!",
};
