export function add(a: number, b: number): number {
  return a + b;
}
export function mul(a: number, b: number): number {
  return a * b;
}

async function main(): Promise<void> {
  console.log("poyo");
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
