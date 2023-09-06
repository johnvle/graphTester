import db from './database.js'; 

export const resolvers = {
    Query: {
        user: async (_, args) => { 
           const { id } = args;
            const query = `SELECT * FROM users WHERE user_id = ${id}`;
            try {
              const result = await db.query(query);
              console.log(result.rows[0]);
            } catch (err) {
              console.log(err);
            }
        },
        review: async (_, args) => {
          const { id } = args;
          const query = `SELECT * FROM review WHERE id = ${id}`;
          try {
            const result = await db.query(query);
            console.log(result.rows[0]);
          } catch (err) {
            console.log(err)
          }
        },
        
        game: async (_, args) => {
          const { id } = args;
          const query = `SELECT * FROM game WHERE game_id = ${id}`;
          try {
            const result = await db.query(query);
            console.log(result.rows[0]);
          } catch (err) {
            console.log(err)
          }
        },

        author: async (_, args) => {
          const { id } = args;
          const query = `SELECT * FROM game WHERE author_id = ${id}`;
          try {
            const result = await db.query(query);
            console.log(result.rows[0]);
          } catch (err) {
            console.log(err)
          }
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
        createUser: async (_, args) => {
          const query = `INSERT INTO users 
            (username,
            email,
            password,
            collection,)
            VALUES 
            (${args.username}, 
            ${args.email}, 
            ${args.password}, 
            ${args.collection}) RETURNING *`;
            try {
              const result = await db.query(query);
              console.log(result);
            } catch (err) {
              console.log(err)
            }
        }
      }
    }