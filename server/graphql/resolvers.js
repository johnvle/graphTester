const db = require('../db/database'); 

export const resolvers = {
    Query: {
        user(_, args) {
            
        }
        // review(_, args) {
        //   return db.reviews.find((review) => review.id === args.id )
        // },
        // game(_, args) {
        //   return db.games.find((game) => game.id === args.id )
        // },
        // author(_, args) {
        //   return db.authors.find((author) => author.id === args.id )
        // }
      },
      Mutation: {
        deleteGame(_, args) {
        //   // in mongoDB WE WOULD USE MONGOOSE FUNCTIONS TO DELETE HERE
        //   // THIS IS JUST FOR LOCAL !!j
        //   db.games = db.games.filter((g) => g.id !== args.id);
        //   // after deleting
        //   return db.games;
        },
        addGame(_, args) {
        //   const game = {
        //     ...args.game,
        //     id: Math.floor(Math.random() * 10000).toString()
        //   }
        //   db.games.push(game)
        //   return game
        },
      }
    }