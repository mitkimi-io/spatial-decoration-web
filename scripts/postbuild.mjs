import fs from "node:fs";
import path from "node:path";

const outApiDir = path.join(process.cwd(), "out/api/v1");

for (const name of ["themes", "version"]) {
  const source = path.join(outApiDir, name);

  if (!fs.existsSync(source) || fs.statSync(source).isDirectory()) {
    continue;
  }

  const content = fs.readFileSync(source, "utf8");
  const targetDir = path.join(outApiDir, name);

  fs.writeFileSync(path.join(outApiDir, `${name}.json`), content);
  fs.unlinkSync(source);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), content);
}
