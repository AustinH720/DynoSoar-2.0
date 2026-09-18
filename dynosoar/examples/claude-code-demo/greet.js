// A tiny script to practice using Claude Code inside VS Code.
// Nothing here connects to the real DynoSOAR app — it's just a sandbox.

function greet(name, timesOfDay) {
  // Bug: this always says "Good morning" no matter the time of day.
  return `Good morning, ${name}!`;
}

console.log(greet("Austin", "evening"));
console.log(greet("Mossback", "afternoon"));
