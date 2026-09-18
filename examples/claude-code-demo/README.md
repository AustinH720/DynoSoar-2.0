# Claude Code + VS Code demo

A throwaway sandbox to practice the Claude Code workflow. It has nothing to
do with the real DynoSOAR app.

## Try it

1. Open this folder in VS Code (or just open the repo — VS Code's integrated
   terminal works from anywhere in the project).
2. Run the script to see the bug:
   ```
   node examples/claude-code-demo/greet.js
   ```
   Notice both lines print "Good morning" even though one should say
   "Good evening" and the other "Good afternoon".
3. In the VS Code terminal, start Claude Code (`claude`) and ask it something
   like:
   > "Fix the bug in examples/claude-code-demo/greet.js so greet() uses the
   > timesOfDay argument."
4. Claude Code will open the file, edit it, and you can re-run the script to
   confirm the fix — same loop as any real task, just on toy code.
5. Once you're comfortable, delete this whole `examples/` folder — it's not
   part of the app.

## What this demonstrates

- Claude Code reads/edits files directly in your working directory (no
  copy-pasting code back and forth).
- You stay in control: it shows you the diff before/as it edits, and you can
  ask follow-up questions or request changes.
- The terminal-in-VS-Code setup means you never leave the editor to iterate.
