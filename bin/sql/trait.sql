/* DROP TABLE trait CASCADE;*/
CREATE TABLE trait(
    id SERIAL PRIMARY KEY,
    "traitType" VARCHAR NOT NULL,
    "traitValue" VARCHAR NOT NULL
);