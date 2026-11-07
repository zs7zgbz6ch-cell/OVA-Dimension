import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('../lab/index.html', import.meta.url), 'utf8');
const source = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(source);

const from = source.indexOf('function connectionMovement(');
const to = source.indexOf('function loadProject(){');
const functions = source.slice(from, to);
const context = vm.createContext({});
vm.runInContext(`
  function canonicalSpotId(s, i) { return s.id; }
  function sameEnd(a, b) { return a?.scene === b?.scene && a?.spot === b?.spot; }
  function sameConnection(c, a, b) {
    return (sameEnd(c.a, a) && sameEnd(c.b, b)) ||
      (sameEnd(c.a, b) && sameEnd(c.b, a));
  }
  ${functions}
`, context);

const scenes = {
  TAVERN: { spots: [
    { id: 'SPOT_01', type: 'transfer' },
    { id: 'SPOT_02', type: 'idle' },
    { id: 'SPOT_03', type: 'tofrom' },
    { id: 'SPOT_04', type: 'waypoint' }
  ] }
};
const end = spot => ({ scene: 'TAVERN', spot });
const connection = (a, b, movement) => ({ a: end(a), b: end(b), movement });
const walk = connection('SPOT_01', 'SPOT_02');
const fade = connection('SPOT_01', 'SPOT_02', 'fade');
const marker = connection('SPOT_01', 'SPOT_03', 'fade');
assert.equal(context.connectionMovement(walk, scenes), 'walk');
assert.equal(context.connectionMovement(fade, scenes), 'fade');
assert.equal(context.connectionMovement(marker, scenes), 'tofrom');
assert.equal(context.normalizeConnection(walk, scenes).movement, undefined);
assert.equal(context.normalizeConnection(fade, scenes).movement, 'fade');
assert.equal(context.normalizeConnection(marker, scenes).movement, undefined);
const sanitized = context.cleanConnections([fade, marker], scenes);
assert.equal(sanitized.length, 2);
assert.equal(sanitized[0].movement, 'fade');
assert.equal(sanitized[1].movement, undefined);
assert.match(source, /CONNECTED SPOTS/);
assert.match(source, /list\.value === ''/);
console.log('Lab connection movement: 11 assertions passed');
