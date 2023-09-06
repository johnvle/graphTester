import db from './database.js'; 

export const resolvers = {
    Query: {
        user: async (_, args) => { 
           const { id } = args;
            const query = `SELECT * FROM users WHERE user_id = $1`;
            try {
              const result = await db.query(query, [id]);
              console.log(result.rows[0]);
              // const final = await result.json(); 
              // console.log('FINAL:', final);
              // return result.rows[200]; // EXPECT AN ERR rows not found
              return result.rows[0];
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
            return result.rows[0];
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
        addUser: async (_, args) => {
          console.log('Received args:', args);
          const query = `INSERT INTO users 
            (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING user_id AS id, username, email, password;  
          `; //  $1, $2, sanitizes the query alias the user_id column as id in the SQL query to match the GraphQL schema.
          const values = [args.input.username, args.input.email, args.input.password]; 
          console.log('values:', values)
          try {
            const result = await db.query(query, values);
            console.log('result:', result);
            const newUser = result.rows[0];
            return newUser; 
          } catch (err) {
            console.log(err);
          }
        }
      }
      
      //createUser =
      // addGame(_, args) {
      //   let game = {
      //     //spread the properties given in the args
      //     ...args.game,
      //     //add a id property with the value of a random string(number) from 0-10000
      //     id: Math.floor(Math.random() * 10000).toString(),
      //   };
      //   db.games.push(game);
      //   return game;
      // },
    }