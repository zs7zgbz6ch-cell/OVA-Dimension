OVA-D LAB v0.3 — Scene Stage / Milestone 01C Pass 2

COMPLETE / SELF-CONTAINED LAB BUILD

Purpose: visually block Berklith Tavern scene spots on the actual iPhone stage.

Features:
- Multiple simultaneous Test Barmaid spot actors
- Tap a character to select; drag to position
- X / Y / Scale sliders and fine +/- nudges
- Rename, add, duplicate and delete spots
- Toggle labels
- SAVE STATE persists the complete layout locally
- COPY STATE exports JSON for sharing back into development
- RESET DEFAULTS restores BAR_RIONNE, BAR_BARMAID, CENTER and STAIRS_BASE

The visible Barmaids represent scene spots, not cloned NPCs.

Next:
01C Pass 3 — routes, curves, timing, stair choreography and movement lock.
01D — worldMinutes -> agenda -> witnessed movement / missed fade sync.

- v0.2.1: Added persistent HIDE UI / SHOW UI stage-preview control.

- v0.2.2: Generic SPOT_01 naming and offscreen placement (X -25..125, Y 0..150).
- Existing saved layouts remain loadable; they are not automatically renamed.

- v0.2.3: Dragging preserves the grab point instead of snapping the actor's feet to the finger. Grab head/torso and pull the feet below frame for foreground compositions.

- v0.3 Route Stage: uses the first iPhone-authored 9-spot tavern map.
- BAR → STAIRS and reverse choreography previews.
- Slow travel, brief stair settle, ascent shrink/fade, and interaction lock while moving.
