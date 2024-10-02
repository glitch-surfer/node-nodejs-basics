import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import {pipeline} from "stream";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const fileName = 'fileToRead.txt'
    const filePath = path.join(__dirname, 'files', fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    fs.createReadStream(filePath).pipe((process.stdout));
};

await read();