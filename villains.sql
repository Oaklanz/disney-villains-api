CREATE DATABASE villains;



CREATE TABLE villains(
    name VARCHAR(255);
    movie VARCHAR(255);
    slug VARCHAR(255);
    createdAt DATETIME DEFAULT NOW();
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW();
    deletedAt DATETIME
    PRIMARY KEY(slug)
)

INSERT INTO villains (name, movie, slug) VALUES