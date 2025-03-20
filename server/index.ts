import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import transactionRoutes from "./routes/transaction.routes"

dotenv.config();
const app = express()

app.use(cors())
app.use(express.json())

app.use("/transaction", transactionRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});