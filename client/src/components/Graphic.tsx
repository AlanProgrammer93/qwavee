import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type Transaction = {
    id: number;
    type: "income" | "expense";
    category: string;
    amount: number;
    date: string;
};

type MonthlyData = {
    name: string;
    ingresos: number;
    gastos: number;
};

const transactions: Transaction[] = [
    { id: 1, type: "income", category: "Salario", amount: 1200, date: "2024-03-01" },
    { id: 2, type: "income", category: "Salario", amount: 800, date: "2024-03-01" },
    { id: 3, type: "expense", category: "Comida", amount: 150, date: "2024-03-02" },
    { id: 4, type: "expense", category: "Transporte", amount: 50, date: "2024-03-03" },
    { id: 5, type: "income", category: "Salario", amount: 100, date: "2024-03-20" },
    { id: 6, type: "income", category: "Salario", amount: 100, date: "2024-02-20" },

];

const Graphic = () => {
    
    const [dataState, setDataState] = useState<MonthlyData[]>([])
    
    useEffect(() => {
            setDataState(getMonthlyData(transactions))
    }, [])

    const getMonthlyData = (transactions: Transaction[]): MonthlyData[] => {
        const monthlyData: Record<string, MonthlyData> = {};

        transactions.forEach(({ date, amount, type }) => {
            const [year, month] = date.split("-").map(Number);
            const monthName = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(new Date(year, month - 1));
            const monthKey = `${monthName} ${year}`;

            if (!monthlyData[monthKey]) {
                monthlyData[monthKey] = { name: monthKey, ingresos: 0, gastos: 0 };
            }

            if (type === "income") {
                monthlyData[monthKey].ingresos += amount;
            } else {
                monthlyData[monthKey].gastos += amount;
            }
        });

        return Object.values(monthlyData);
    };
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg w-[90%]">
            <h2 className="text-lg text-center font-semibold mb-4">Ingresos vs Gastos</h2>
            <ResponsiveContainer className="w-[90%]" width="90%" height={300}>
                <BarChart data={dataState}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="ingresos" fill="#4CAF50" />
                    <Bar dataKey="gastos" fill="#F44336" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graphic