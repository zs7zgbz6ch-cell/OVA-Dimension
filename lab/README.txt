OVA-D LAB v0.3.1 — Distance Route / Milestone 01C Pass 2

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


- v0.3.1: Fixed route actor aspect-ratio distortion. Route movement now animates HEIGHT (the same scale unit used by scene spots), never width.
- Spot scale remains authoritative perspective data and interpolates smoothly A -> B.
- Route travel time is now derived from authored fictional world distance, not screen-pixel distance.
- First proof uses 1.15 m/s walking speed and per-segment metre values.
- COPY STATE now includes BAR_TO_STAIRS route distance data.

Core rule:
Screen x/y = where the actor appears.
Spot scale = how large the actor appears at that depth.
Route distance = how long travel should take in the fictional world.
