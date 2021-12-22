const express = require("express");
const router = express.Router();
const sql = require("mssql");

const controller = require("./orderController");

const productService = require('../product/productService');

// GET Method
router.get("/:id", controller.get);
router.get("/", controller.getAll);

// POST Method
router.post("/", controller.insert);

// PUT Method
router.put("/:id", controller.update);

// DELETE Method
router.delete("/:id", controller.delete);

module.exports = router;
