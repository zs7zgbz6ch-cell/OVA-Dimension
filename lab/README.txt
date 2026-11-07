OVA-D LAB v0.8.2 — World Stage

Purpose
World Stage authors scene geography and presentation endpoints. Game simulation, NPC agendas, movement timing, fades and player locking remain game responsibilities.

Spot types
- UNSET: not yet assigned.
- IDLE / ACTIVITY: persistent destinations (the game enforces occupancy).
- WAYPOINT: transit-only navigation point.
- TRANSFER: scene entry/exit navigation point.
- TO/FROM: optional visual entry/exit endpoint for one TRANSFER spot. Not a navigation node, agenda destination, or world occupancy slot.

To/From authoring (existing tools)
1. Add a spot, choose TYPE: TO/FROM.
2. Place and scale it with the existing drag and X/Y/S controls and character preview.
3. Select the TRANSFER spot (or the TO/FROM spot) and CONNECT to the other within the SAME scene.
4. Exactly one TO/FROM may be connected to each TRANSFER, and each TO/FROM may have one TRANSFER. Invalid links are rejected. Changing spot types removes incompatible links.
5. No marker? The future game movement presentation should simply fade at the transfer position.

Presentation semantics (for future game movement implementation)
- Exit: normal route -> TRANSFER -> TO/FROM while fading out.
- Entry: TO/FROM -> TRANSFER while fading in -> normal route.
- The game must exclude TO/FROM links from its pathfinding graph. A TO/FROM link is stored in the existing connections array but is identifiable by endpoint type.
- Existing TRANSFER-to-TRANSFER cross-scene links remain ordinary navigation connections.
- The Lab authors positions and scales; animation speed, pause, directional pose and fade timing belong to the game.

World export
- EXPORT WORLD copies OVA-D_WORLD_STAGE_0.8.1 JSON.
- Scenes contain id, background, spots (id/type/x/y/scale); connections contain a/b scene+spot endpoints.
- TO/FROM uses the same spot shape and connection shape as existing types. No separate marker coordinates or duplicate editing UI.
- Import accepts existing v0.8 exports and v0.8.2 exports. Existing saved Lab data is preserved under the same localStorage key.
- Editor-only selection, labels and active scene are excluded from production export.
- Import sanitizes invalid/duplicate links, including incompatible TO/FROM links.

IMPORTANT GAME INTEGRATION NOTE
Do not replace the current OVA-Dimension/world/world-stage.json with an export containing TO/FROM spots until the game world parser and navigator are updated to recognize them and exclude presentation links from navigation. This release updates ONLY the Lab; no game engine files are changed.

PATCH LAYOUT
This ZIP contains the Lab under /lab/. Upload only the changed lab/ files to the repository, not the root game index.html.


CONNECTION MOVEMENT — v0.8.2
- Select a spot, then choose an existing link under CONNECTED SPOTS.
- Choose WALK (default) or FADE for the selected navigation connection.
- The movement applies in both directions. WALK is stored without a movement field for backwards compatibility; FADE is stored as "movement": "fade" on that connection.
- TO/FROM links are presentation-only and cannot be assigned a navigation movement type.
- Old imports and local data default to WALK and remain compatible. The editor keeps the existing localStorage key.
- The CONNECTED SPOTS selector shows a visible count instead of appearing empty in iPhone Safari. Select a real connection to remove or edit it.
- Export version: OVA-D_WORLD_STAGE_0.8.2.
- This release is Lab-only. The game must be taught to interpret movement:fade before replacing its production world-stage.json with a fade-enabled export.
