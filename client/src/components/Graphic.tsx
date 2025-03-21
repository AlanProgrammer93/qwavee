import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { RootState } from '../store';

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

const Graphic = () => {
    const { transactions } = useSelector((state: RootState) => state.transactions);

    const [monthly, setMonthlyState] = useState<MonthlyData[]>([])

    useEffect(() => {
        setMonthlyState(getMonthlyData(transactions))
    }, [transactions])

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
                <BarChart data={monthly.slice(-3)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="ingresos" fill="green" />
                    <Bar dataKey="gastos" fill="red" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default memo(Graphic)