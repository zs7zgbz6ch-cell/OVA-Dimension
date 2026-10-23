OVA-D 01D Pass 4C.0 — System Consistency Cleanup

Built from passing 4B.10. No new gameplay or visual feature work.

Interaction contract
- Player must be free (interactionState === idle).
- Character must be logically present in the current scene.
- Character must be at a semantic idle or activity node/state.
- Character presentation must actually be visible.
- Transfer and waypoint states are not interactable.

Rionne consistency fixes
- Rionne world position now stores canonical navigation node IDs: tavern.barIdle / room.window.
- Fixes upstairs Rionne being non-interactable at room.window.
- Removes raw Stage spot-ID comparisons from Rionne interaction eligibility.
- Tavern and Room Rionne now use the same semantic interaction rule.
- Old localStorage/save values using historical spot IDs are migrated automatically.
- Rionne destination commits now resolve through NAV_NODE instead of writing scene-specific raw IDs.

Generic character cleanup
- canInteractCharacter() is no longer hardcoded to the Tavern scene.
- Generic character eligibility now checks current scene + visibility + idle/activity semantic state.
- Existing Test Barmaid behavior remains compatible.

Audit notes (recorded, intentionally not changed here)
- Some Dimension Gear presentation phases still assign interactionState directly rather than through setInteractionState(). Eligibility checks remain safe, but this can be normalized in a later timing-focused cleanup.
- Current prototype still contains character-specific presentation/dialogue code by design; 4C.0 does not prematurely generalize those systems.

Acceptance test
1. Let Rionne go upstairs to room.window.
2. Enter Rionne's room while player control is free.
3. Tap visible Rionne.
4. She should boop and open the same character screen used downstairs.
5. Observe / Talk / Back / Leave should behave normally.
6. During movement/transfer/presentation she should remain non-interactable.

Visual framing, character card landing, Observe layouts, movement, agenda timing, witness/sync and Dimension Gear timings are unchanged from 4B.10.

Changed files:
- index.html
- README.txt
