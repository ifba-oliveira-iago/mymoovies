const db = require("../db");

const CategoryController = {
  async findAll(req, res) {
    try {
      const category = await db.query("SELECT * FROM category");
      res.json(category.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async find(req, res) {
    const { id } = req.params;

    try {
      const category = await db.query("SELECT * FROM category WHERE id = $1", [
        id,
      ]);

      if (category.rows.length > 0) {
        res.json(category.rows[0]);
      } else {
        res.status(404).json({ error: "Categoria não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    const { name, description } = req.body;

    try {
      const newCategory = await db.query(
        "INSERT INTO category (name, description) VALUES ($1, $2) RETURNING *",
        [name, description]
      );

      res.status(201).json(newCategory.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const result = await db.query(
        "DELETE FROM category WHERE id = $1 RETURNING *",
        [id]
      );

      if (result.rowCount > 0) {
        res.status(204).json({});
      }

      res.status(304).json({});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = CategoryController;
