import { Url } from '../entity/Url';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import shortid from 'shortid';
import { ApolloError } from 'apollo-server';

@Resolver()
export class UrlResolver {
    @Mutation(() => Boolean)
    async generateUrl(@Arg('url', () => String) url: string) {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$',
            'i'
        ); // fragment locator

        // Check to see if the posted url is a valid url
        if (!pattern.test(url)) {
            return new ApolloError('URL is invalid.', '401');
        }

        // Generate unique short id
        const id = shortid.generate();
        // Save to fields to database
        await Url.insert({ shortId: id, redirect: url });

        return true;
    }

    @Query(() => [Url])
    async getAllUrls() {
        return await Url.find();
    }
}
