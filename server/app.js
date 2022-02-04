const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config();

// Load schema & resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// Load DB methods
const mongoDataMethods = require('./data/db');

// Connect to mongodb
const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@graphql-basic.pjidg.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        console.log("MongoDB connected");
    } catch(error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({mongoDataMethods}),
});

const app = express();
server.applyMiddleware({ app });

app.listen({port: 4000}, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});