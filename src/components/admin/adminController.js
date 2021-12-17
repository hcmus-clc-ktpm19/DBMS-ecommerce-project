const service = require('./adminService');

//---------------------------------GET METHOD--------------------------------------------//
/**
 * Lay 1 tai khoan len bang id
 *
 * @param req request
 * @param res respone
 * @returns {Promise<void>}
 */
exports.get = async (req, res) => {
  try {
    const account = await service.getById(req.params.id);
    res.json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Phan trang
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.paging = async (req, res) => {
  try {
    const accounts = await service.paging(req.query.page);
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


/**
 * Render trang them admin
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.renderAddAdmin = (req, res) => {
  res.render('add_admin');
}

/**
 * Render profile
 * @param req request
 * @param res response
 */
exports.renderProfile = async (req, res) => {
  try {
    const admins = await service.getAll();
    res.render('profile', { admins, message: req.flash('success') });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
//---------------------------------POST METHOD--------------------------------------------//
/**
 * Them account moi vao database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.insert = async (req, res) => {
  try {
    const { admin, rawPassword } = await service.insert(req.body);
    req.flash('success', `Password của ${admin.email}: ${rawPassword}`);
    res.redirect('/admin/profile');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//---------------------------------PUT METHOD--------------------------------------------//
/**
 * Tim va Update account da co trong database tra ket qua neu thanh cong
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
  try {
    await service.update(req.params.username, req.body);
    res.redirect('/admin/profile');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//---------------------------------DELETE METHOD--------------------------------------------//
/**
 * Tim va xoa tai khoan trong database
 *
 * @param req request
 * @param res response
 * @returns {Promise<void>}
 */
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.redirect('/admin/profile');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
