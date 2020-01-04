const pool = require('../databasePool');
const traitValues = require('../data/traits');

traitValues.forEach(TRAIT => {
    const traitType = TRAIT.type;
    const traitValues = TRAIT.values;

    traitValues.forEach(traitValue => {
        pool.query(
            `INSERT INTO trait("traitType", "traitValue")
            VALUES($1, $2)
            RETURNING id`,
            [traitType, traitValue],
            (error, response) => {
                if (error) console.error(error);

                const traitId = response.rows[0].id;

                console.log(`Inserted trait - id: ${traitId}`);
            }
        );
    });
});