export default {
  order: 1,
  id: "arrays",
  title: "Arrays",
  sections: [
    {
      title: "Overview",
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
      code: `// JavaScript examples
const arr = [1,2,3];
// access
const x = arr[1]; // 2
// push
arr.push(4);
// insert in middle (costly)
arr.splice(1, 0, 99);
console.log(arr);`,
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
  ],
};
