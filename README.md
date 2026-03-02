# @dephub/base64

> Encode. Decode. Simplified.

`@dephub/base64` — a utility for encoding UTF-8 strings to Base64 and decoding Base64 back to UTF-8.

[![NPM version](https://img.shields.io/npm/v/@dephub/base64.svg?style=flat)](https://npmjs.org/package/@dephub/base64)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 🔹 **Simple API**: `encode()` and `decode()` functions
- 🚀 **CLI support**: encode/decode directly from the terminal
- 🔄 **Reliable Base64 encoding/decoding** — handles all UTF-8 characters correctly
- 🌐 **Cross-environment** — works in Node.js and modern browsers
- ⚡ **Fast performance** — minimal and efficient Base64 operations

## Installation 💿

- npm: `npm install @dephub/base64`
- pnpm: `pnpm add @dephub/base64`
- yarn: `yarn add @dephub/base64`
- bun: `bun add @dephub/base64`

## Usage 📦

### API </>

```ts
import { encode, decode } from '@dephub/base64';

const encoded = encode('hello');
console.log(encoded); // "aGVsbG8="

const decoded = decode(encoded);
console.log(decoded); // "hello"
```

### CLI 🖥️

```bash
# Encode string
base64 encode "hello"
# Output: aGVsbG8=

# Decode string
base64 decode "aGVsbG8="
# Output: hello

# Show help
base64 --help
```

Commands:

```
encode <string>  : Encode string to Base64
decode <base64>  : Decode Base64 to string
--help           : Show help message
--version        : Show version
```

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
