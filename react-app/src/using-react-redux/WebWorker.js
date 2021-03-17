export default class WebWorker {
  constructor(worker, data) {
    const code = worker.toString();
    const blob = new Blob([`(${code})('${data}')`]);
    return new Worker(URL.createObjectURL(blob));
  }
}
