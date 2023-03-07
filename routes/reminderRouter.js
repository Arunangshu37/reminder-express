import express from "express"

const reminderRouter = express.Router();

reminderRouter.get('/', (req, res)=>{
    res.json([
        {
            "id" : 1,
            "reminderTitle" : "Test reminder for render",
            "description" : "this could be a long description"
        },
        {
            "id" : 2,
            "reminderTitle" : "Another plain simple reminder",
            "description" : "this could be a short description"
        },
    ]);
})

export default reminderRouter;