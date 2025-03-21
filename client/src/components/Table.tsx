import React from 'react'

type Transaction = {
    id: number;
    type: "income" | "expense";
    category: string;
    amount: number;
    date: string;
};

const transactions: Transaction[] = [
    { id: 1, type: "income", category: "Salario", amount: 1200, date: "2024-03-01" },
    { id: 2, type: "income", category: "Salario", amount: 800, date: "2024-03-01" },
    { id: 3, type: "expense", category: "Comida", amount: 150, date: "2024-03-02" },
    { id: 4, type: "expense", category: "Transporte", amount: 50, date: "2024-03-03" },
    { id: 5, type: "income", category: "Salario", amount: 100, date: "2024-03-20" },
    { id: 6, type: "income", category: "Salario", amount: 100, date: "2024-02-20" },

];

const Table = () => {
    return (
        <div className="w-[90%] bg-white p-4 rounded-xl shadow-md mb-6">
            <h2 className="text-lg text-center font-semibold mb-4">Últimos Movimientos</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Categoría</th>
                        <th className="p-2">Monto</th>
                        <th className="p-2">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.slice(-5).map((t) => (
                        <tr key={t.id} className="border-t">
                            <td className="p-2 text-center">{t.category}</td>
                            <td className={`p-2 text-center ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                                ${t.amount}
                            </td>
                            <td className="p-2  text-center">{t.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table