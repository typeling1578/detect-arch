#include <math.h>
#include <stdint.h>
#include <string.h>

#ifdef BUILD_EXE
#include <stdio.h>
#endif

int is_nan_signbit_set_from_inf_sub() {
  // https://github.com/google/XNNPACK/blob/5b045a6bb26cf138822855cd8a879195cd2c7437/src/configs/hardware-config.c#L243-L250
  static const volatile float inf = INFINITY;
  return signbit(inf - inf);
}

int is_canonical_nan_after_op() {
  uint32_t qnan_with_payload_bits = 0x7fc01578;
  float qnan_with_payload;
  memcpy(&qnan_with_payload, &qnan_with_payload_bits, 4);

  float result = qnan_with_payload + 1.0f;
  uint32_t bits;
  memcpy(&bits, &result, 4);

  return bits == 0x7fc00000;
}

int isX86() {
  return is_nan_signbit_set_from_inf_sub();
}

int isArm() {
  return !is_nan_signbit_set_from_inf_sub() && !is_canonical_nan_after_op();
}

int isRiscV() {
  return !is_nan_signbit_set_from_inf_sub() && is_canonical_nan_after_op();
}

#ifdef BUILD_EXE
int main(void) {
  if (isX86()) {
    printf("x86\n");
  }
  if (isArm()) {
    printf("Arm\n");
  }
  if (isRiscV()) {
    printf("RISC-V\n");
  }
}
#endif
