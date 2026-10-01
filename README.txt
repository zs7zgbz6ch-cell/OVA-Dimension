OVA-D Prototype 0.02 — Downstairs / Layering Test

UPLOAD TO GITHUB
1. Open your OVA-Dimension repository.
2. Upload everything from this folder to the repository root, preserving the assets folder.
3. Replace index.html when GitHub asks/commits the change.
4. Wait for GitHub Pages to redeploy.

PWA / SAFARI BAR TEST
After the updated site loads in Safari:
1. Tap Share.
2. Choose Add to Home Screen.
3. Open OVA-D from the new Home Screen icon.
It should launch in standalone landscape presentation without Safari's normal browser bars. iOS may still reserve safe areas around hardware/system UI.

WHAT TO TEST
- Landing -> stairs -> downstairs tavern.
- Stew Man is an independent transparent layer over the untouched master tavern.
- Tap Stew Man repeatedly.
- Tap fireplace/bar/stairs.
- Stairs return to landing.
- Try pinch zoom / double-tap zoom.
- Close and reopen: interaction state should persist.
- Home Screen launch / Safari-bar behavior.

IMPORTANT
The tavern background file is the immutable master plate:
assets/berklith_mainroom_master.png
Do not edit/overwrite it with a character composite.

0.02 is still a compositing experiment. Stew Man's fit/perspective may need adjustment; the key test is whether the untouched room and separate character/prop layers work reliably.
