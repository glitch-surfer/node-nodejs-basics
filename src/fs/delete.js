import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const fileName = 'fileToRemove.txt'
    const filePath = path.join(__dirname, 'files', fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.unlink(filePath);
};

await remove();