const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll({include: [Product]});
    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// GET a single tag
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {include: [Product]});
    if(!tag) {
      res.status(404).json({msg:"No tag found with this id!"});
      return;
    }
    res.status(200).json(tag)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

// UPDATE a tag
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {id: req.params.id}
    })
    res.status(200).json(tag)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});


// DELETE a tag
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!tag) {
      res.status(404).json({msg:"No tag found with this id!"});
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
