import { ApolloServer, gql } from 'apollo-server';

const musics = [
    {name: "2002" , artist: "Anne-Marie" , type: "Pop"},
    {name: "Lost star" , artist: "Adam Levine" , type: "Pop"},
    {name: "Back in back" , artist: "AC/DC" , type: "Rock"},
    {name: "Psycho" , artist: "Post Malone" , type: "R&B"},
    {name: "Love someone" , artist: "Lukas Graham" , type: "Pop"},
    {name: "Best Part" , artist: "Daniel Caesar" , type: "R&B"},
    {name: "Easy on me" , arttist: "Adele" , type: "Pop"},
    {name: "Levitating" , arttist: "Dua Lipa" , type: "Pop"},
    {name: "FRIENDS" , arttist: "Marshmello & Anne-Marie" , type: "Pop"}

];
//schema
const typeDefs = gql`
    type Query {
        musics: [Music]
        music(name: String): Music
    }
    type Music {
        name: String
        artist: String
        type: String
    }
`;

//resolver
const resolvers = {
    Query: {
        musics: (parent, args, context, info) => {
            return musics;
        },
        music: (parent, args, context, info) => {
            return musics.find(music => music.name === args.name);
        }
    }
};

//function apollo-server
const startApolloServer = async (typeDefs, resolvers) => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await server.listen();
    console.log(`Server ready at ${url}`);
};

//call function
startApolloServer(typeDefs, resolvers);