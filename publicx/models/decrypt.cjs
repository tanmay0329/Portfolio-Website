const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  const input = fs.readFileSync(inputFile);
  const iv = input.slice(0, 16);
  const encrypted = input.slice(16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  fs.writeFileSync(outputFile, decrypted);
  console.log("Decrypted successfully! Output:", outputFile);
};

decryptFile("character.enc", "character.glb", "Character3D#@");
