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

exports.getById = async (req, res) => {
    try {
        const { id } = req.params
        
        const todo = await TodoModel.findOne({ id })


        return res.status(200).json({
            status : "Success",
            code : 200,
            message : "Todo was gotten.",
            todo,
        }) 
    } catch (err) {
        return res.status(500).json({
            status : "Error",
            code : 500,
            message : "Request was failed"
        })
    }
}

exports.updateById = async (req, res) => {
    try {
        const { id } = req.params
        
        const updatedTodo = await TodoModel.updateOne({ _id : id }, { ...req.body })


        return res.status(200).json({
            status : "Success",
            code : 200,
            message : "Todo was gotten.",
            todo : updatedTodo,
        }) 
    } catch (err) {
        return res.status(500).json({
            status : "Error",
            code : 500,
            message : "Request was failed"
        })
    }
}

exports.deleteAll = async (req, res) => {}

exports.deleteById = async (req, res) => {}