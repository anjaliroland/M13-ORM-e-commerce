const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// GET all categories
router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({include: [Product]});
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// GET a single category
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {include: [Product]});
    if(!category) {
      res.status(404).json({msg:"No category found with this id!"});
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// UPDATE a category
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {id: req.params.id}
    })
    res.status(200).json(category)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!category) {
      res.status(404).json({msg:"No category found with this id!"});
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
