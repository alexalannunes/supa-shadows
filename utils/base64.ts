function toBase64(value: string) {
  return Buffer.from(value).toString("base64");
}

function toAscii(value: string) {
  return Buffer.from(value, "base64").toString("ascii");
}

export const base64 = {
  encode: toBase64,
  decode: toAscii,
};
