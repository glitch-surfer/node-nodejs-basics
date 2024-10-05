import {fileURLToPath} from 'url';
import fs from 'fs';
import path from 'path';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const fileToCreateName = 'fresh.txt'
    const filePath = path.join(__dirname, 'files', fileToCreateName);

    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    await fs.promises.writeFile(filePath, 'I am fresh and young');
};

await create();