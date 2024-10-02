import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";
import {pipeline} from 'stream';
import {createHash} from 'crypto';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');

    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const readFileStream = fs.createReadStream(filePath);
    const hashTransformStream = createHash('sha256');

    pipeline(
        readFileStream,
        hashTransformStream,
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(hashTransformStream.digest('hex'));
            }
        }
    )
};

await calculateHash();