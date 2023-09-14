module.exports = {
  name: 'frontend-helloworld',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
