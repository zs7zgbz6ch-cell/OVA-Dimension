OVA-D Prototype 0.03.3 — Touch Lock Fix

Changes:
- Extends iOS selection/callout blocking across the complete game surface.
- Prevents scene art and character cels from becoming selectable browser objects.
- Cancels long-hold browser gestures while preserving normal quick hotspot taps.
- Blocks drag, context-menu and selection-start behavior inside OVA-D.
- Keeps the existing scene preloading fix so Stew Man remains part of the composed scene.
- Bumps the service-worker cache to 0.03.3.

Test:
1. Go downstairs and long-press Stew Man, the tavern plate, tables, floor and other artwork.
2. No blue selection rectangle, handles, loupe, Share/Copy menu or draggable image should appear.
3. Quick taps should still trigger Stew Man and environmental hotspots normally.
4. Confirm stairs, event lock, lamp persistence and the landing interactions still work.
