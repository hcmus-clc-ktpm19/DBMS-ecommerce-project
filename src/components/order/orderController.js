const service = require('./orderService');

exports.get = async (req, res) => {
  try {
    const order = await service.get(req.params.id);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const orders = await service.getAll();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const newOrder = service.insert(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.stats(400).json({ message: err.message });
  }
}

/**
 * Tim va Update order da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    const updatedOrder = await service.update(req.params.id, req.body);
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

/**
 * Tim va xoa order trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.json({message: `Order ${req.params.id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}