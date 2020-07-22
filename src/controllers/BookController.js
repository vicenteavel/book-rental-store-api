const connection = require('../database/connection');

module.exports = {
   async show(req, res) {
      const { id } = req.params;

      const [book] = await connection('books').select('*').where('id', id);

      return res.json(book);
   },

   async index(req, res) {
      const books = await connection('books').select('*');

      return res.json(books);
   },

   async create(req, res) {
      const { title, author, value } = req.body;

      const [id] = await connection('books').insert({ title, author, value });

      return res.json({ id });
   },

   async update(req, res) {
      const { id } = req.params;
      const { title, author, value } = req.body;

      const response = await connection('books').where('id', id).update({ title, author, value });

      return res.json({ status: !!response });
   },

   async delete(req, res) {
      const { id } = req.params;

      // delete all the books rented and reserverd

      const response = await connection('books').where('id', id).delete();
      
      return res.json({ status: !!response });

   }
}