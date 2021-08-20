module.exports = {
  preset: [
    'advanced',
    {
      discardComments: {
        // Don't discard important or WebComponent prop documentation
        remove: (comment) => {
          return !(comment.startsWith('!') || comment.includes('@prop'))
        },
      },
      reduceIdents: false,
    },
  ],
}
