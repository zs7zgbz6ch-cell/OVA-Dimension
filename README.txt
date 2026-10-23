OVA-D 4D.2 — Entity World State Authority

Built directly from 4D.1 World Graph Foundation.
No new gameplay or visual feature work.

WORLD AUTHORITY
- Runtime World data is loaded from world/world-stage.json.
- index.html no longer contains a second copy of scene spots or connections.
- Navigation graph is generated from the World Stage export at startup.

ENTITY WORLD STATE
- ENTITY_WORLD is the runtime registry for logical entity positions.
- entityNode(entityId) reads canonical logical position.
- commitEntityDestination(entityId, destination) is the generic position write boundary.
- Rionne now uses this entity-state layer.
- Historical Rionne save values are still migrated at the save boundary.

PRESENTATION AUTHORITY FIX
- Removed rionneShouldBeUpstairs().
- syncRionnePresentation() no longer derives Rionne's position from world time.
- Changing scenes cannot commit Rionne upstairs/downstairs.
- Presentation reads Rionne's actual entity node and displays that truth.
- Agenda/navigation remain responsible for changing logical position.

TARGET REGRESSION
1. Start at 17:20 with Rionne at Tavern SPOT_04.
2. Cross 17:35 and let her go to RIONNES_ROOM/SPOT_02.
3. Player returns downstairs before 17:55.
4. Cross 17:55.
5. Rionne must return from the Room through the stairs and bar transfer to Tavern SPOT_04.
6. She must NOT appear at the bar first and then walk back toward the stairs.

BOUNDARY FOR NEXT PASSES
- Rionne's authored movement poses/performance are still character-specific presentation code.
- Agenda occurrence definitions are still prototype-specific.
- Actions/save/UI will be generalized in later passes only after this state authority passes regression.
