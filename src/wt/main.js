import {Worker} from "worker_threads";
import os from "os";
import path from "path";
import {fileURLToPath} from "url";

const performCalculations = async () => {
    const n = 10;
    const logicalCPUsCount = os.cpus().length;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');
    const workerPath = path.join(__dirname, 'worker.js');

    const workers = Array(logicalCPUsCount).fill(null).map((_, i) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerPath);

            worker.once('message', (result) => {
                resolve({status: 'resolved', data: result})
                worker.terminate();
            });
            worker.once('error', (err) => {
                console.error(err);
                resolve({status: 'error', data: null})
                worker.terminate();
            });

            worker.postMessage(n + i);
        })
    })
    try {
        const results = await Promise.all(workers);
        console.log(results)
    } catch (err) {
        console.error(err);
    }
};

await performCalculations();