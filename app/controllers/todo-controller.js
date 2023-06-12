const TodoModel = require('@models/todo-model');

exports.getAll = async (req, res) => {
    try {
        const todos = await TodoModel.find({})

        return res.status(200).json({
            status : "Success",
            code : 200,
            message : "All todos were gotten.",
            todos,
        }) 
    } catch (err) {
        return res.status(500).json({
            status : "Error",
            code : 500,
            message : "Request was failed"
        })
    }
}

exports.getById = async (req, res) => {}

exports.updateById = async (req, res) => {}

exports.deleteAll = async (req, res) => {}

exports.deleteById = async (req, res) => {}