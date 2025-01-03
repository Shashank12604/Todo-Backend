//import the model 
const Todo = require("../models/Todo")

//define todo handler

exports.createTodo = async(req,res)=>{
    try { // Debugging request body
        console.log("Request received:", req.body);
        const {title,description} = req.body;
        const response = await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created successfully',
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal error",
            message:err.message,
        });
    }
}