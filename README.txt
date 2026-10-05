OVA-D 01D — Witnessed Character Agenda Test

Based on stable v0.9 + passed 01D agenda timing test.

TEST:
- Test Barmaid is visibly behind the tavern bar before 17:35.
- Use +1 / +5 minute interactions to cross 17:35.
- After the interaction resolves, there is a ~1 second quiet beat.
- She reacts, becomes presentation-locked, fades from behind the bar, reappears in front, crosses the room, then leaves upstairs.
- Crossing 17:35 while in Rionne's Room updates her logical state off-screen; returning to the tavern should show her already gone.
- Reset Prototype restores 17:20 and the barmaid.

This is still a controlled 01D test. It does not replace the stable v0.9 source of truth until explicitly promoted.
