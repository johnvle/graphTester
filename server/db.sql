CREATE TABLE users (
    "user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255)
);

CREATE TABLE author (
    "author_id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255),
    "verified" BOOLEAN 
);

CREATE TABLE game (
    "game_id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255),
);

CREATE TABLE review (
    "id" SERIAL PRIMARY KEY,
    "rating" INT,
    "content" VARCHAR(255),
    "game_id" INTEGER REFERENCES game(game_id),
    "author_id" INTEGER REFERENCES author(author_id),
);