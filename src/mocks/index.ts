if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  if (typeof window !== 'undefined') {
    const { worker } = require('./Browser');
    worker.start();
  }
}
export {};
