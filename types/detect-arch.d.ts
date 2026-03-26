export function isX86(): Promise<boolean>;

export function isArm(): Promise<boolean>;

export function isRiscV(): Promise<boolean>;

export default {
    isX86: typeof isX86,
    isArm: typeof isArm,
    isRiscV: typeof isRiscV
}
