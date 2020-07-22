const connection = require('../database/connection');

module.exports = {
   async show(req, res) {
      const { id } = req.params;

      const [client] = await connection('clients').select('*').where('id', id);

      return res.json(client);
   },

   async index(req, res) {
      const clients = await connection('clients').select('*');

      return res.json(clients);
   },

   async create(req, res) {
      const { name, email} = req.body;

      try {
         const [id] = await connection('clients').insert({ name, email });

         return res.json({ id });
      } catch(error) {
         return res.json({ status: 'E-mail already registered' });
      }
   },

   async update(req, res) {
      const { id } = req.params;
      const { name, email } = req.body;

      const response = await connection('clients').where('id', id).update({ name, email });

      return res.json({ id: response });
   },

   async delete(req, res) {
      const { id } = req.params;

      // delete all the books rented and reserverd

      const response = await connection('clients').where('id', id).delete();

      const status = !!response ? 'Success' : 'Client does not exist';
      
      return res.json({ status  });

   }
}