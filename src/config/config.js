require('dotenv').config();


module.exports = {
    token: '',
    clientId: '948942326699524176',
    guildId: '921743618316836875',
    youtubeApiKey: "AIzaSyCOHrsELlSn_D3PkyIO7Jd9hP-ZFRnC25I",
    mongoUri: "mongodb+srv://muhammedmuhsinxx:uSHzz34HZh3H3HFj@cluster0.0eqhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    spotify: {
        clientId: "e6f84fbec2b44a77bf35a20c5ffa54b8",
        clientSecret: "498f461b962443cfaf9539c610e2ea81",
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
