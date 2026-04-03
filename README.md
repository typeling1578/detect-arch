# detect-arch

​A CPU architecture detection library without relying on User Agent strings or Browser APIs.

Inferring the host CPU architecture by observing NaN bit patterns.

## Install

```
$ pnpm install detect-arch
```

## Usage

### ESM

```
import detectArch from "detect-arch";

console.log("isX86:", await detectArch.isX86());
console.log("isArm:", await detectArch.isArm());
console.log("isRiscV:", await detectArch.isRiscV());
```

### CJS

```
const detectArch = require("detect-arch");

(async () => {
  console.log("isX86:", await detectArch.isX86());
  console.log("isArm:", await detectArch.isArm());
  console.log("isRiscV:", await detectArch.isRiscV());
})();
```

### Script tag

```
<script src="https://cdn.jsdelivr.net/npm/detect-arch@1/dist/detect-arch.iife.min.js"></script>
<script>
(async () => {
  console.log("isX86:", await detectArch.isX86());
  console.log("isArm:", await detectArch.isArm());
  console.log("isRiscV:", await detectArch.isRiscV());
})();
</script>
```

## Build

```bash
$ git clone https://github.com/typeling1578/detect-arch
$ cd detect-arch
$ pnpm install
$ pnpm run build
```
