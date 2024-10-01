import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const folderName = 'files';
    const folderPath = path.join(__dirname, folderName);

    if (!fs.existsSync(folderPath)) {
        throw new Error('FS operation failed');
    }

    const files = await fs.promises.readdir(folderPath);
    console.log(files);
};

await list();