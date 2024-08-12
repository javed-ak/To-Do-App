const express = require ( "express" );
const jwt = require ("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json())

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if ( !parsedPayload.success ) {
        res.status(403).json({
            msg: "You send wrong Inputs."
        })
        return;
    }
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if ( !parsedPayload.success ) {
        res.status(403).json({
            msg: "You send wrong Inputs."
        })
        return;
    }
})
app.listen(3000);