import { DatapackWriter } from '@mcslib/datapack';
import { createReadStream, createWriteStream } from 'node:fs';
import { helloWorld } from './hello-world.js';

const path = 'datapack.zip';
const writer = new DatapackWriter('mcslib_template', createWriteStream(path));

await writer.addStream('pack.mcmeta', createReadStream('./pack.mcmeta'));

await writer.export({
  name: 'hello_world',
  fn: helloWorld,
  args: [],
});

await writer.finish();
console.log(`Datapack generated at ${path}`);