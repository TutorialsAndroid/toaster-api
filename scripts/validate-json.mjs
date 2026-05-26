import fs from "fs";
import path from "path";

const apiDir = path.resolve("api");

function getJsonFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getJsonFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith(".json") ? [fullPath] : [];
  });
}

function validateFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");

  try {
    const parsed = JSON.parse(raw);

    if (parsed.items && parsed.count !== parsed.items.length) {
      throw new Error(
        `Invalid count in ${filePath}. Expected ${parsed.items.length}, found ${parsed.count}`
      );
    }

    console.log(`✅ ${filePath}`);
  } catch (error) {
    console.error(`❌ ${filePath}`);
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (!fs.existsSync(apiDir)) {
  console.error("❌ api directory not found");
  process.exit(1);
}

const files = getJsonFiles(apiDir);

if (files.length === 0) {
  console.error("❌ No JSON files found");
  process.exit(1);
}

files.forEach(validateFile);

if (process.exitCode !== 1) {
  console.log(`\n🎉 All ${files.length} JSON files are valid.`);
}
