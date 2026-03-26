import createModule from "../build/detect-arch-native.mjs";

let wasmModule;

async function initialize() {
    if (wasmModule) return wasmModule;
    wasmModule = await createModule();
    return wasmModule;
}

export async function isX86() {
    return Boolean((await initialize())._isX86());
}

export async function isArm() {
    return Boolean((await initialize())._isArm());
}

export async function isRiscV() {
    return Boolean((await initialize())._isRiscV());
}

export default {
    isX86,
    isArm,
    isRiscV
}
