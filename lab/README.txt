OVA-D LAB v0.4 — Semantic Scene Stage

Adds manually authored semantic spot type, transition and destination metadata while preserving the proven v0.3 staging workflow.

RESET LAB now clears the current layout to one neutral UNNAMED / UNSET spot.
COPY STATE exports OVA-D_SCENE_STAGE_0.4 semantic data.
Existing v0.3 local state is migrated into the new v0.4 save key.

The existing BAR ↔ STAIRS choreography remains as a LEGACY preview for regression testing. Its stair fade is not generic route-end behavior.

v0.4.1 UI SAFETY
- HIDE UI moved into the action row directly beside STOP.
- When hidden, SHOW UI floats safely at bottom-right.
- No scene data, semantic, route, or movement behavior changed.
