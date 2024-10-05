import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const fileToRenameName = 'wrongFilename.txt';
    const fileToRenamePath = path.join(__dirname, 'files', fileToRenameName);
    const newFileName = 'properFilename.md'
    const newFilePath = path.join(__dirname, 'files', newFileName);

    if (!fs.existsSync(fileToRenamePath) || fs.existsSync(newFilePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.rename(fileToRenamePath, newFilePath);
};

await rename();