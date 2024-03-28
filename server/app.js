import Express from 'express';
import cors from 'cors';

const app = Express();
const port = 5000;

app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
));

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})