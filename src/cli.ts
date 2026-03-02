#!/usr/bin/env node

import { Command, CommandError } from '@dephub/command';

import { decode } from './core/decode.js';
import { encode } from './core/encode.js';
import { description, name, version } from './utils/pkg.js';

const cmd = new Command()
  .name(name.split('/')[1] ?? 'base64')
  .version(version)
  .description(description);

cmd
  .command('encode', 'Encode string to Base64')
  .argument('string', 'The text string to encode into Base64 format')
  .handler(({ args }) => {
    if (args.string.length === 0)
      throw new Error('You must provide a string to encode.');
    console.log(encode(args.string));
  });

cmd
  .command('decode', 'Decode Base64 to string')
  .argument('base64', 'The Base64 string to decode back into text')
  .handler(({ args }) => {
    if (args.base64.length === 0)
      throw new Error('You must provide a Base64 string to decode.');
    console.log(decode(args.base64));
  });

try {
  await cmd.run();
} catch (err) {
  if (err instanceof CommandError) {
    console.error(`\nError: ${err.message}\n`);
    cmd.help();
    process.exit(1);
  }
  throw err;
}
