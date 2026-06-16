# Bunny Protocol — Secret Features Guide

This guide documents the hidden progression, terminal commands, achievements, hints, and rewards added to the portfolio as the "Bunny Protocol." It's intended for maintainers and contributors.

---

## Overview

- The Bunny Protocol is a hidden progression and reward layer integrated into the portfolio UI.
- Progress persists locally in `localStorage` under the key `bunny-protocol-progress-v1`.
- Core pieces:
  - `ProgressProvider` — manages state, achievements and persistence (`src/lib/progression.tsx`).
  - `SecretPanel` — floating Bunny icon and glass panel with tabs (Achievements, Hints, Rewards, Bunny Lore, Progress) (`src/components/secret-panel.tsx`).
  - `SecretTerminal` — keyboard-triggered terminal (`Ctrl+Shift+K`) with commands (`src/components/secret-terminal.tsx`).
  - `BunnyAIGuide` — occasional cryptic hints (`src/components/bunny-ai-guide.tsx`).
  - `Completion` — full-screen celebration when all achievements are unlocked (`src/components/completion.tsx`).
  - `/vault` route — secret vault guarded by progression (`src/routes/vault.tsx`).

---

## Achievements

See `src/data/achievements.ts` for the canonical list. Each achievement includes:

- `id` — unique key used in code and storage
- `title` — displayed to users
- `description` — short objective summary
- `hint` — cryptic hint (shown in Hints tab)
- `reward` — reward label (shown in Rewards tab)
- `rarity` — `common` | `rare` | `legendary`

Important achievement IDs used in logic:

- `best-bunny-friend` — click the Bunny 10 times
- `explorer` — visit all major sections
- `terminal-hacker` — open the secret terminal
- `bunny-whisperer` — type `bunny` in terminal
- `curious-explorer` — legendary final achievement (all others unlocked)

Unlock checks run automatically inside the `ProgressProvider` and update `state.unlockedIds`.

---

## Progress Persistence

- The provider reads and writes a JSON object to `localStorage`. The shape includes `unlockedIds`, `visitedSections`, `hiddenClues`, and other counters.
- To reset during development, clear the key in the browser console:

```js
localStorage.removeItem('bunny-protocol-progress-v1')
```

---

## Secret Panel

- Opens by clicking the floating Bunny in the bottom-right.
- Tabs: Achievements, Hints, Rewards, Bunny Lore, Progress.
- Interactions (panel opened, tab visits) update progression state via `markPanelOpened` and `markPanelTabVisited`.

Implementation notes:

- Avoid showing direct answers in Hints; they are intentionally cryptic.
- Rewards content is gated to unlocked achievements.

---

## Secret Terminal

- Open with `Ctrl+Shift+K` (and close with `Escape`).
- Commands:
  - `help` — lists commands
  - `about` — small portfolio headline
  - `skills` — shows core skills
  - `projects` — points to projects
  - `bunny` — interacts with Bunny (also unlocks `bunny-whisperer`)
  - `unlock` — developer probe (unlocks `code-sleuth` locally)
  - `secret` — cryptic response

Terminal usage updates `terminalCommands` and marks the terminal as opened.

---

## Bunny AI Guide

- Displays occasional speech-bubble hints. Frequency increases subtly with progress.
- Uses the shared `HINTS` list in `src/lib/progression.tsx`.

Design note: Hints are intentionally vague and are not direct solutions.

---

## Vault Route

- Path: `/vault` (registered in `src/routes/vault.tsx`).
- Users cannot access it directly — the route checks `canAccessVault` from the provider and redirects to an access-denied page if requirements are not met.
- The Vault contains: Founder Notes, Startup Ideas, Future AI Projects, IoT Vision, Secret Resume, Hidden Timeline.

Anti-cheat note: Because all checks are client-side, they are not cryptographically secure. The goal is game-like discovery and not to resist a determined attacker.

---

## 100% Completion

- When the `completed` flag is true, the `Completion` component shows a full-screen celebration with a title `CURIOUS EXPLORER`, confetti, neon glow and Bunny animation.

---

## Developer tips

- When adding new achievements, update `ACHIEVEMENT_DEFINITIONS` and ensure any unlock logic updates the provider's computed unlocks.
- Use `useProgress()` in components to report interactions: `reportSectionVisit`, `findHiddenClue`, `markPanelOpened`, `markTerminalOpened`, `recordBunnyClick`, etc.

---

If you'd like, I can also:

- Add server-side verification for vault access (requires auth).
- Add unit tests for progression unlock logic.
- Extend Rewards pages with downloadable artifacts.
