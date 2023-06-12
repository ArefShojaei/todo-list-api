const { Router } = require("express");
const router = Router()
const {
    createTodo,
    getAll,
    getById,
    updateById,
    deleteAll,
    deleteById
} = require('@controllers/todo-controller');

router
    .get("/", getAll)
    .post("/", createTodo)
    .get("/:id", getById)
    .patch("/:id", updateById)
    .delete("/", deleteAll)
    .delete("/:id", deleteById)

module.exports = router