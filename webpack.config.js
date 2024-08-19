module.exports = {
  // Other webpack configuration settings...

  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
    },
  },
};
