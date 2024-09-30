import {fileURLToPath} from 'url';
import fs from 'fs';
import path from 'path';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const sourceFolderName = 'files';
    const destinationFolderName = 'files_copy';
    const sourceFolderPath = path.join(__dirname, sourceFolderName);
    const destinationFolderPath = path.join(__dirname, destinationFolderName);
    const isDestinationFolderExists = fs.existsSync(destinationFolderPath);
    const isSourceFolderExists = fs.existsSync(sourceFolderPath);

    if (isDestinationFolderExists || !isSourceFolderExists) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.promises.cp(sourceFolderPath, destinationFolderPath, {recursive: true});
    } catch (error) {
        console.dir(error)
        throw new Error('FS operation failed');
    }

};

await copy();
