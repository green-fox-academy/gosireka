CREATE TABLE todos(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  done BOOLEAN NULL
);

ALTER TABLE todos
MODIFY COLUMN done BOOLEAN DEFAULT 0;

INSERT INTO todos
VALUES (1, 'shopping', false);

INSERT INTO todos (title, done)
VALUES ('cooking', false);
VALUES ('watching the videos', true);

INSERT INTO todos (title)
VALUES ('do the laundry'), ('eat orange'), ('buy catfood'), ('play with the cat');;

DELETE FROM todos WHERE id=5;

UPDATE todos
SET done = 1
WHERE id = 7;

SELECT * FROM todos;
