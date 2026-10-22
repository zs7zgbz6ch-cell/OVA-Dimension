OVA-D 01D Pass 4B.2 — Character Screen

Built from the user-tested 4B.1C source.

Changed files:
- index.html
- sw.js
- assets/rionne-character-screen.png (new)

Character interaction changes:
- Replaces the old separate portrait/options/content/agenda shells with one unified Rionne character screen.
- Uses the new transparent full-body Rionne artwork as a reusable character layer.
- Character screen automatically uses the current area as its background (tavern or Rionne's room for this prototype).
- Options float inside the character image: Observe, Talk, Give, Status, Leave.
- Observe removes the option clutter and reframes Rionne full-body; Back returns to the normal character screen.
- Portrait orientation is allowed only while Observe mode is active.
- Talk uses a separate dialogue balloon outside the character card.
- Give and Status use their own independent side panel placeholders.
- Rionne can be tapped/poked inside the character screen for small touch feedback.
- Restores a visible scene-level Rionne boop without mutating locomotion transforms.
- Barmaid dialogue is positioned from her live on-screen bounds so it stays above her instead of covering her body.

Protected / intentionally unchanged:
- Dimension Gear time and agenda logic
- witnessed / missed / sync behavior
- Rionne locomotion and route choreography
- scene navigation
- Barmaid +1 minute interaction behavior

Cleanup:
- Removed the superseded 4B.1C portrait-card CSS/HTML.
- Removed the separate options-shell/content overlay implementation.
- Removed the unused agenda-ghost interaction panel.
- Removed old portrait zoom-mode code and rionne-interaction-bar.jpg dependency from the service worker.
