import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import {pipeline} from "stream";
import zlib from "zlib";

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const fileName = 'fileToCompress.txt'
    const filePath = path.join(__dirname, 'files', fileName);

    const zipName = 'archive.gz'
    const zipFilePath = path.join(__dirname, 'files', zipName);

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    pipeline(
        fs.createReadStream(filePath),
        zlib.createGzip(),
        fs.createWriteStream(zipFilePath),
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    )
};

await compress();