const connection = require('../database/connection.js');

module.exports = {
    async create(req, res) {
        const {id} = req.body;
        const ong = await connection('ongs').where('id',id).select('nome').first();

        if(!ong){
            return res.status(400).json({error: "Nenhuma ONG foi localizada com este ID!"});
        }

        return res.json(ong);

    } 

}