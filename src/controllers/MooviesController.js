const MooviesController = {
  findAll(req, res) {
    /**
     * Aqui entraria a regra de persistência do banco de dados
     */
    res.json([
      {
        id: 1,
        title: "Homem Aranha",
        description: "Um filme baseado em história em quadrinhos",
        category_id: 1,
        realease_date: "01/10/2022",
      },
      {
        id: 2,
        title: "Se beber não case 1",
        description: "Um filme de comédia",
        category_id: 2,
        realease_date: "01/11/2022",
      },
    ]);
  },

  find(req, res) {
    const { id } = req.params;

    /**
     * Aqui entraria a regra de persistência do banco de dados
     */

    res.json({
      id: id,
      title: "Homem Aranha",
      description: "Um filme baseado em história em quadrinhos",
      category_id: 1,
      realease_date: "01/10/2022",
    });
  },

  create(req, res) {
    const { title, description, category_id, realease_date } = req.body;
    /**
     * Aqui entraria a regra de persistência do banco de dados
     */

    res.status(201).json({
      id: Number.MAX_SAFE_INTEGER,
      title,
      description,
      category_id,
      realease_date,
    });
  },

  delete(req, res) {
    const { id } = req.params;

    /**
     * Aqui entraria a regra de persistência do banco de dados
     */

    res.status(204).json();
  },
};

module.exports = MooviesController;
