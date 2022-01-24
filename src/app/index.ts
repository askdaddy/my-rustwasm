
// @ts-ignore
const worker = new Worker(new URL('./worker', import.meta.url));
worker.postMessage({
    act:"init"
});

