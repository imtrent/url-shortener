import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { TestResolver } from './resolver/TestResolver';

import { connectDb } from './db';

async function bootstrap() {
    await connectDb();
    const schema = await buildSchema({
        resolvers: [TestResolver]
    });

    const server = new ApolloServer({
        schema,
        playground: true
    });

    const { url } = await server.listen(process.env.PORT || 8000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
