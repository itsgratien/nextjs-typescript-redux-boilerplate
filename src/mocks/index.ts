const init = async () => {
  if (typeof window !== 'undefined') {
    const { browser } = await import('./Browser');
    browser.start();
  } else {
    const { server } = await import('./Server');
    server.listen();
  }
};

init();

export {};
