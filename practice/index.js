
const fetch = require('node-fetch'); // Import node-fetch

console.log("Hello world");

async function main() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    console.log(result);
}

main()