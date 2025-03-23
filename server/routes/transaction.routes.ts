import express from "express"
import { create, getAll, remove } from "../controllers/transaction.controller"
import { validateTransaction } from "../middlewares/validateTransaction"

const router = express.Router()

router.post("/", validateTransaction, create)
router.get("/", getAll)
router.delete("/:id", remove)

export default router