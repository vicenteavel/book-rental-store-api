const connection = require('../database/connection');
const formatDate = require('../utils/formatDate');

module.exports = {
   async index(req, res) {
      const rents = await connection('rents').select('*');

      return res.json(rents);
   },

   async create(req, res) {
      const { client_id, book_id, rented_until } = req.body;

      const rented_at = formatDate(new Date());

      const [id] = await connection('rents').insert({
         client_id,
         book_id,
         rented_at,
         rented_until
      });

      return res.json({ id });
   },

   async delete(req, res) {
      const { id } = req.params;

      const response = await connection('rents').where('id', id).delete();

      return res.json({ status: !!response });
   }
}