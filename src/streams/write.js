import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const fileName = 'fileToWrite.txt'
    const filePath = path.join(__dirname, 'files', fileName);

    process.stdin.pipe(fs.createWriteStream(filePath))
};

await write();