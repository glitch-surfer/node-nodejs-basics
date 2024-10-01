import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const fileName = 'fileToRead.txt'
    const filePath = path.join(__dirname, 'files', fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    const content = await fs.promises.readFile(filePath, 'utf-8');
    console.log(content);
};

await read();