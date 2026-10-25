OVA-D LAB v0.8 — World Stage

Purpose
World Stage owns world geography. It does not own characters, NPCs, agendas, dialogue, activities, player state, discovery, interactables, or gameplay.

Canonical production world data
- Scene ID
- Scene background asset reference
- Spot ID: SPOT_01, SPOT_02, ...
- Spot type: UNSET / IDLE / WAYPOINT / TRANSFER / ACTIVITY
- X / Y / Scale
- Connections between spots

Rules
- Spot IDs are the real IDs. There is no separate spot name or hidden timestamp ID.
- A spot's visual/contextual meaning (door, window, bar, toilet, market corner, etc.) is not Lab production data.
- Agenda/content gives a spot contextual meaning at runtime.
- Connections are bidirectional geography.
- Connections may be inside one scene or cross scenes.
- Cross-scene entity travel should normally connect TRANSFER spots.
- OVA-D consumes exported scenes/spots/connections instead of recreating coordinates or route edges by hand.
- Player viewpoint is scene-based; player state does not occupy SPOT_XX positions.

v0.8 production export contract
- EXPORT WORLD creates OVA-D_WORLD_STAGE_0.8 JSON.
- Export contains only: version, scenes, scene id/background/spots, and connections.
- Editor-only state is automatically excluded from production export.
- activeScene is editor state and is not exported.
- selected is editor state and is not exported.
- labels is editor state and is not exported.
- The Lab still autosaves those editor values locally so editing remains convenient.
- Clean v0.8 world exports can be imported back into the Lab; editor defaults are reconstructed automatically.

Workflow
1. Create/select a scene.
2. Set its background asset reference when creating it.
3. Place spots and assign semantic types.
4. Connect traversable spots.
5. For scene-to-scene entity travel, connect the relevant transfer spots.
6. Tap EXPORT WORLD.
7. Replace OVA-Dimension/world/world-stage.json with the exported JSON.
8. OVA-D consumes this world geography; game/content/player systems add their own meaning separately.

PATCH LAYOUT
This package intentionally contains the Lab under /lab/. Upload/replace these files inside the repository lab folder; do not replace the root OVA-D game index.html.
