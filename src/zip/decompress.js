import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import {pipeline} from "stream";
import zlib from "zlib";

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const zipName = 'archive.gz'
    const zipFilePath = path.join(__dirname, 'files', zipName);

    const fileName = 'fileToCompress.txt'
    const filePath = path.join(__dirname, 'files', fileName);

    if (!fs.existsSync(zipFilePath)) {
        throw new Error('FS operation failed');
    }

    pipeline(
        fs.createReadStream(zipFilePath),
        zlib.createUnzip(),
        fs.createWriteStream(filePath),
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    )
};

await decompress();