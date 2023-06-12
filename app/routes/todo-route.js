const { Router } = require("express");
const router = Router()
const {
    getAll,
    getById,
    updateById,
    deleteAll,
    deleteById
} = require('../controllers/todo-controller');

router
    .get("/", getAll)
    .get("/:id", getById)
    .patch("/:id", updateById)
    .delete("/", deleteAll)
    .delete("/:id", deleteById)

module.exports = router