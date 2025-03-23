import { Request, Response } from "express";
import db from "../config/database";

export const create = async (req: Request, res: Response): Promise<Response> => {
    const { type, category, amount } = req.body;
    
    /* if (!type || !category || !amount) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    } */
    try {
        db.run("INSERT INTO transactions (type, category, amount, date) VALUES (?, ?, ?, ?)",
            [type, category, amount, new Date().toISOString().split('T')[0]],
            function (err: any) {
                if (err) return res.status(500).json({ message: "Ocurrio un problema al crear transaccion." });
                
                return res.status(201).json({
                    message: "Transaccion Creada Correctamente.",
                    transaction: { id: this.lastID, type, category, amount: parseInt(amount), date: new Date().toISOString().split('T')[0] }
                });
            }
        );
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrio un problema en el servidor."
        });
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        db.all("SELECT * FROM transactions", [], (err, rows) => {
            if (err) return res.status(500).json({ message: "Ocurrio un problema. Intentelo otra ves." });
            return res.status(200).json({
                transactions: rows
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrio un problema en el servidor."
        });
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        db.run("DELETE FROM transactions WHERE id = ?", [id], function (err: any) {
            if (err) return res.status(500).json({ message: "Ocurrio un problema al eliminar transaccion." });

            if (this.changes === 0) return res.status(404).json({ message: "Transacción no encontrada" });

            return res.status(200).json({
                message: "Transacción eliminada."
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Ocurrio un problema en el servidor."
        });
    }
}