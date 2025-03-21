import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { toast } from "react-toastify";
import clientAxios from "../utils/axios";
import { deleteTransaction } from "../store/transactionReducer";
import Row from "./Row";
import { memo, useCallback } from "react";

const Table = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { transactions } = useSelector((state: RootState) => state.transactions);

    const handlerDelete = useCallback(async (id: number) => {
        await clientAxios.delete(`/transaction/${id}`)
            .then(res => {
                toast.success(res.data.message);
                dispatch(deleteTransaction(id))
            })
            .catch(err => toast.error(err.response.data.message))
    }, [])
    
    return (
        <div className="w-[90%] bg-white p-4 rounded-xl shadow-md mb-6">
            <h2 className="text-lg text-center font-semibold mb-4">Últimos Movimientos</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-[color:var(--color-primary-dark)] text-white">
                        <th className="p-2">Categoría</th>
                        <th className="p-2">Monto</th>
                        <th className="p-2">Fecha</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.slice(-5).map((t) => (
                        <Row key={t.id} transaction={t} handlerDelete={handlerDelete} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default memo(Table)