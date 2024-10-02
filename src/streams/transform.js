import {pipeline, Transform} from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            try {
                const transformedChunk = chunk.toString().split('').reverse().join('')
                this.push(transformedChunk);
                callback();
            } catch (err) {
                callback(err);
            }
        }
    })

    pipeline(
        process.stdin,
        transformStream,
        process.stdout,
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    )
};

await transform();