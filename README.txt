OVA-D Prototype 0.03.2 — Scene Image Handling

Changes:
- Prevents iOS/Safari long-press image previews and image context menus inside the game.
- Prevents dragging/selecting scene artwork.
- Preloads and decodes background plates and character layers before revealing the game.
- Keeps Stew Man as a separate composited layer while avoiding visible late pop-in on startup/restore.
- Bumps the service-worker cache to 0.03.2.

Test:
1. Open downstairs and long-press the tavern/background/Stew Man. No image Share/Save/Copy preview should appear.
2. Leave and reopen OVA-D. The tavern and Stew Man should appear as a composed scene rather than background first, character later.
3. Confirm normal taps, event lock, stairs, lamp persistence and Stew Man interactions still work.
