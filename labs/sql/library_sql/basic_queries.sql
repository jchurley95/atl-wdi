-- BASIC QUERIES

-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors
SELECT * FROM authors;

-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

<<<<<<< HEAD
-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year >= 1900;
=======
-- Get all authors born in the 20th century or later
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality='United States of America';

<<<<<<< HEAD
-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;
=======
-- Get all books published in 1985
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < 1989;

-- Get just the title of all books.
SELECT books.title FROM books;

-- Get just the year that 'A Dance with Dragons' was published
<<<<<<< HEAD
  -- Cry when you realize how long it's been
SELECT books.publication_date FROM books WHERE title='A Dance with Dragons';
=======
>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title ILIKE '%the %' OR title ILIKE '% the %';
// ignore case use ILIKE instead of LIKE

-- Add yourself as an author
INSERT INTO authors (name, nationality, birth_year) 
VALUES ('Joey Hurley', 'United States of America', 1995);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id) 
VALUES ('Intro to Carpentry', 2011, 11), ('Living with 8 1/2 Fingers', 2015, 11);

-- Update one of your books to have a new title
UPDATE books SET title = 'Advanced Carpentry: Living With 8 1/2 Fingers' WHERE id=71;

-- Delete your books
DELETE FROM books WHERE author_id=11;

-- Delete your author entry
DELETE FROM authors WHERE id=11;