OVA-D 01D Pass 4B.6 — iPhone Character Screen Stabilization

Built from 4B.5 after tracing the final iPhone-landscape CSS cascade.
- Fixes the old max-height:500px rule that was overriding the narrower character-card widths.
- Normal character card is now genuinely narrower on iPhone landscape.
- Observe card is also narrower and remains a distinct full-body composition.
- Normal Rionne framing is controlled inside the iPhone-landscape rule so her upper-body crop no longer inherits the wrong desktop composition.
- Dimension Gear, agenda logic, routes, dialogue progression and character interaction behavior otherwise unchanged.

Changed files:
- index.html
- README.txt
