OVA-D CURRENT — 01D Agenda Integration Test

BASED DIRECTLY ON STABLE MASTER v0.9

Preserved:
• locked iOS/startup presentation behavior
• immediate hold ring, 840 ms activation
• travel-black hard scene swap
• PWA manifest/icons and existing environments

01D test additions:
• two in-scene time interactions in each scene (+1 and +5 minutes)
• reusable interaction lifecycle / anti-spam lock
• action time advances only after the interaction resolves
• agenda crossing test uses (oldWorldMinute, newWorldMinute], not exact equality
• one-shot 17:35 agenda trigger
• ~1 second quiet post-action beat before agenda presentation
• agenda state persists and participates in prototype save/load/reset
• service-worker cache bumped for iPhone testing

TEST:
Start at 17:20. Use +5 until 17:30, then +1 as desired. Crossing 17:35 with either action should fire the agenda exactly once after the interaction and quiet beat.

This is a controlled 01D integration build. Promote only after iPhone testing.
