const express = require("express");
const router = express.Router();

const{createTodo}=require("../controllers/createTodo");
const{getTodo}=require("../controllers/getTodo")

router.post("/createTodo",createTodo);

module.exports = router;