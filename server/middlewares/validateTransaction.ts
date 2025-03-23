import { Request, Response, NextFunction } from "express";

export interface Transaction {
    type: string;
    category: string;
    amount: number;
}

export const validateTransaction = (req: Request, res: Response, next: NextFunction) => {
    const transaction: Transaction = req.body;

    if (!transaction.type || typeof transaction.type !== "string") {
        return res.status(400).json({ message: "El tipo de transacción es requerido." });
    }
    if (!transaction.category || typeof transaction.category !== "string") {
        return res.status(400).json({ message: "La categoría es requerida." });
    }
    if (
        transaction.amount === undefined ||
        typeof transaction.amount !== "number" ||
        transaction.amount <= 0
    ) {
        return res.status(400).json({ message: "El monto debe ser un número mayor a cero." });
    }

    next();
};