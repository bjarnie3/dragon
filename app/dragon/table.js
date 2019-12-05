const pool = require('../../databasePool');
//const DragonTraitTable = require('../dragonTrait/table.js');

class DragonTable {
    static storeDragon(dragon) {
        const { birthdate, nickname, generationId } = dragon;
        const int_generationId = dragon.generationId.generationId;
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO dragon(birthdate, nickname, generationid) 
                VALUES($1, $2, $3) RETURNING id`,
                [birthdate, nickname, int_generationId],
                (error, response) => {
                    if (error) return reject(error);
                    const dragonId = response.rows[0].id;
 
                    resolve({ dragonId });
                }
            )
        });
    }
}

module.exports = DragonTable;