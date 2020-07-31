module.exports = {
  preset: [
    'default',
    {
      discardComments: {
        // Don't discard important or JSDoc style comments used for WebComponent documentation
        remove: (comment) => comment[0] !== '!' && !comment.includes('@prop'),
      },
    },
  ],
}
