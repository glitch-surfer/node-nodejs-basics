import {fileURLToPath} from "url";
import path from "path";
import {spawn} from "child_process";

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.join(__filename, '..');
    const scriptsPath = path.join(__dirname, 'files', 'script.js');

    const childProcess = spawn('node', [scriptsPath, ...args], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello', 'node']);
