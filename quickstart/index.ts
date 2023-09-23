import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Hello, Bun!");
    return new Response(body);
  },
  port: 3000,
})

console.log(`Bun Version: ${Bun.version}`);
console.log(`Listening on http://localhost:${server.port} ...`);
