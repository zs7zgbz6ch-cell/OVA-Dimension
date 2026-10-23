OVA-D LAB v0.7.1 — World Stage

Purpose
Scene Stage owns world geography. It does not own characters, NPCs, agendas, dialogue, activities, or gameplay.

Canonical scene data
- Scene ID
- Spot ID: SPOT_01, SPOT_02, ...
- Spot type: UNSET / IDLE / WAYPOINT / TRANSFER / ACTIVITY
- X / Y / Scale
- Connections between spots

Rules
- Spot IDs are the real IDs. There is no separate spot name or hidden timestamp ID.
- A spot's visual meaning (door, window, bar, toilet, market corner, etc.) is not Lab data.
- Agenda/content gives a spot contextual meaning at runtime.
- Connections are bidirectional geography.
- Connections may be inside one scene or cross scenes.
- Cross-scene travel should normally connect TRANSFER spots.
- OVA-D should consume exported spots/connections instead of recreating coordinates or route edges by hand.

v0.7.1 changes
- Removed custom spot naming.
- Removed duplicate spot identity (name vs internal ID).
- New/duplicated spots use stable sequential SPOT_XX IDs.
- Added connection authoring and export.
- Project export is now OVA-D_WORLD_STAGE_0.7.
- Migrates the existing v0.5/v0.6 Scene Library local project automatically.
- Old spot names are discarded during migration; SPOT_XX identity is retained where possible.

Workflow
1. Create/select a scene.
2. Place spots and assign semantic types.
3. Connect traversable spots.
4. For scene-to-scene travel, connect the relevant transfer spots.
5. Export the project.
6. OVA-D consumes this world data; character/NPC agendas choose destinations within it.


PATCH LAYOUT
This package intentionally contains the Lab under /lab/. Upload/replace these files inside the repository lab folder; do not replace the root OVA-D game index.html.


v0.7.2: simplified tools (removed Duplicate, Save Project, Copy Spots, Copy Scene) and made the existing tools panel safely scrollable in portrait with a sticky Close header. World data structure unchanged.
