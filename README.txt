OVA-D 01D — Cross-Scene Character Synchronization Test

Based on the proven witnessed-character agenda build.

TEST GOAL
At 17:35 Test Barmaid logically transfers from BERKLITH_TAVERN to RIONNES_ROOM.

AUTHORED GEOGRAPHY
Tavern SPOT_02 behind-bar idle -> SPOT_04 bar depth transfer -> SPOT_05 centre waypoint -> SPOT_03 stairs transfer.
Room SPOT_01 door is the cross-scene transfer endpoint; SPOT_02 window idle is her destination activity spot.

THREE CASES
1. WITNESSED: use normal +1 interactions to cross 17:35 while in Tavern. After the interaction and quiet beat, she reacts and performs the full departure. Visit Rionne's Room afterward: she is at the window idle spot.
2. MISSED / OCCUPIED: arrange time so OCCUPIED +5 crosses 17:35 in Tavern. Time advances while the interaction card still has your attention. On return, no bubble and no journey replay: the stale Tavern Barmaid gently fades. She exists in Rionne's Room.
3. OFF-SCREEN: go to Rionne's Room before 17:35 and cross the trigger there. No Tavern departure performance plays. Because the destination change happens while the player is occupied in the room, she fades in at the room idle spot when the interaction settles.

RESET PROTOTYPE restores 17:20 and Barmaid to Tavern SPOT_02.

This is a controlled test build, not a production-content pass.

01D PASS 4A — DIMENSION GEAR
- Rionne's 17:35 upstairs / 17:55 downstairs agenda is now a recurring daily schedule.
- Agenda occurrences are reconciled from elapsed world-time intervals, independent of which interaction advanced time.
- Multiple crossed occurrences are processed chronologically.
- If the player remains in the Tavern, Rionne's 17:55 return is now witnessed as an authored stairs-to-bar route.
- If the player is in Rionne's Room, the matching arrival/departure is witnessed there.
- Scene re-entry synchronizes to current schedule state without replaying off-screen history.
- Old one-shot agenda flags are no longer used to drive the routine.


01D PASS 4A.1 — MOVEMENT GRAMMAR
- Dimension Gear timing/schedule behavior remains unchanged.
- Horizontal travel now derives facing from X direction: left stays left, right mirrors right.
- Depth travel derives 3/4 front/back walking art from scale change.
- SPOT_05 is a pass-through waypoint: SPOT_04 -> SPOT_05 -> SPOT_03 is one continuous walk.
- Normal walking pace is slower and route duration is distance-based.
- Transfer spots now follow: arrive -> slow/stop -> orient in full front/back -> pause -> cross transfer.
- Tavern bar departure: fade behind bar, appear SPOT_04 full-front, pause, then walk.
- Tavern stairs departure: arrive SPOT_03, switch full-back, pause, then ascend/shrink/fade.
- Tavern return uses the inverse staging and correct left-facing return travel.
- Room arrival: fade in at door full-back, pause, then walk to window.
- Room exit: walk to door, stop full-front, pause, then fade through transfer.
- Added rionne-back.png for authored full-back transfer choreography.

PASS 4A.2 — WITNESS + SYNC
- Agenda occurrences still reconcile every crossed world-time boundary.
- Only an occurrence landed on exactly is eligible for witnessed choreography.
- If control returns after the occurrence, world state is already advanced and the visible stale character uses a brief anime streak/squash sync-out or sync-in instead of replaying history.
- Route facing is now derived per current route leg; Rionne pose assets are preloaded to avoid the Spot 04 wrong-facing flash.


PASS 4A.7 — DESTINATION NAVIGATION GRAPH
- Agenda events now request a destination instead of hard-coding every intermediate spot.
- Tavern/Room spots are navigation nodes with typed connections.
- A graph search resolves the logical route between Rionne's current node and destination.
- Waypoints remain pass-through geometry; transfers remain authored boundary choreography.
- Only the route portion in the player's current scene is animated; off-screen travel is simulated.
- The old duplicated witnessed departure/arrival route functions were removed.
- Existing rAF locomotion, directional PNG assets, Dimension Gear timing, and sync effects remain intact.


4B.1A NPC INTERACTION PROOF
- Barmaid occupies Tavern SPOT_06 activity slot (64.3, 80.9, 44.5).
- Character sprite is the tap surface; no marker/outline.
- Tap boop -> rotating NPC line -> +1 world minute -> normal Dimension Gear agenda resolution.
- Tavern stairs updated to latest Scene Stage Spot 3 coordinates.
- Rionne navigation/presentation remains based on stable 4A.7.
