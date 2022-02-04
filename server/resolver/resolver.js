const resolvers = {
    Query: {
        books: () => [
            {
                id: 1,
                name: 'Mastering Bitcoin',
                genre: 'Nonfiction'
            },
            {
                id: 2,
                name: 'Mastering Blockchain',
                genre: 'Nonfiction'
            }
        ]
    }
};

module.exports = resolvers;