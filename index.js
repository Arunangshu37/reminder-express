import express from "express";
import path from "path";
import cors from "cors";
import reminderRouter from "./routes/reminderRouter.js";
import { fileURLToPath } from 'url';
const app = express();
const port = 8000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(cors())

// handling express routing for api request & response
app.use("/api/reminders", reminderRouter);

// handling angular routing 
app.use(express.static(path.join(__dirname , "/core"))) 
app.use("/*", (req, res)=>{
    res.sendFile(path.join(__dirname , "/core/index.html"));
})
app.listen(port, ()=>{
    console.log(`Starting server on port ${port}`);
})