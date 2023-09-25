import Express from "express";
import { checkPort } from "./src/config/comprobate_enviroment.js";
import cors from "cors";
import router from "./src/routes/router.js";
import "dotenv/config";

const app = Express();

app.use(Express.json());

const port = process.env.PORT;
const bdd = process.env.DATABASE_URL;
const jwt = process.env.JWT_ACCESS_SECRET;

checkPort(port, bdd, jwt);

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/", router);

app.listen(port, () => console.log(`server running on port ${port}`));
