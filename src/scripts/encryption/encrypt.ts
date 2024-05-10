import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

const key = randomBytes(32);
const iv = randomBytes(16);

export async function encrypt(password: string) {
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encryptedPw = cipher.update(password, "utf-8", "hex");
  encryptedPw += cipher.final("hex");

  console.log("key:", key);
  console.log("iv:", iv);
  return encryptedPw;
}

export function decrypt(password: string) {
  const decipher = createDecipheriv("aes-256-cbc", key, iv);
  let decryptedPw = decipher.update(password, "hex", "utf-8");
  decryptedPw += decipher.final("utf-8");

  return decryptedPw;
}
