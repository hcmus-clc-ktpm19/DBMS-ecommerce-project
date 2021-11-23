const model = require('../models/product');

exports.get = async (req, res) => {
  try {
    const product = await model.findByPk(req.params.id);
    if (product === null) {
      return res.status(404).json({mess: `Product id '${req.params.id}' not found`});
    }

    res.json(product);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const product = await model.findAll();
    res.json(product);
  } catch (e) {
    res.status(400).json({ mess: e.message });
  }
};

exports.insert = async (req, res) => {

}