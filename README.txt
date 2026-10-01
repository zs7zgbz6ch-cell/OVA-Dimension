OVA-D Prototype 0.02.3 — World-Space Hotspots

This build fixes the Landing interaction coordinate system before character layering begins.

Changes:
- Landing hotspots now use the 1672×941 master artwork as their coordinate space.
- Cover scaling/cropping is calculated at runtime, so hotspots remain attached to the artwork across different phone and screen aspect ratios.
- J.B. + M.B. is moved onto the old support post identified during the iPhone test.
- The post gets a comfortable finger-sized hit region while remaining visually unmarked.
- Door, lamp, window, stairs and lamp-light effect now use the same world-space system.
- Lamp state and all existing localStorage persistence are preserved.
- PWA cache bumped to ovad-0023.

Next production focus: character layering. Rionne can finally stop taking the world's longest bath.
