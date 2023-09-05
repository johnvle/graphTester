INSERT INTO users (username, email, password) VALUES 
('john_doe', 'john.doe@example.com', 'password123'),
('jane_smith', 'jane.smith@example.com', 'password456'),
('alice_jones', 'alice.jones@example.com', 'password789'),
('bob_brown', 'bob.brown@example.com', 'password101'),
('charlie_white', 'charlie.white@example.com', 'password202');

-- Populating the author table
INSERT INTO author (name, verified) VALUES 
('John Doe', TRUE),
('Jane Smith', FALSE),
('Alice Brown', TRUE),
('Robert White', FALSE),
('Emily Black', TRUE);

-- Populating the game table
INSERT INTO game (title) VALUES 
('The Witcher 3'),
('Zelda: Breath of the Wild'),
('Minecraft'),
('Final Fantasy XV'),
('Red Dead Redemption 2');

-- Populating the review table, linking games and authors somewhat arbitrarily
INSERT INTO review (rating, content, game_id, author_id) VALUES 
(5, 'A masterpiece!', 1, 1),   -- John Doe reviews The Witcher 3
(4, 'A beautiful open world.', 2, 2), -- Jane Smith reviews Zelda: Breath of the Wild
(3, 'Endless possibilities.', 3, 3),  -- Alice Brown reviews Minecraft
(4, 'A thrilling journey.', 4, 4),    -- Robert White reviews Final Fantasy XV
(5, 'A captivating story.', 5, 5);    -- Emily Black reviews Red Dead Redemption 2
