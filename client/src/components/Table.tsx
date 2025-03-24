import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { toast } from "react-toastify";
import clientAxios from "../utils/axios";
import { deleteTransaction } from "../store/transactionReducer";
import Row from "./Row";
import { memo, useCallback } from "react";
import { motion } from 'framer-motion'

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
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full bg-white p-4 shadow-md mb-6">
            <h2 className="font-bold text-lg mb-10">Últimos Movimientos</h2>
            <table className="table-fixed w-full">
                <thead className="text-left">
                    <tr>
                        <th className="w-1/2 pb-5 text-sm font-extrabold tracking-wide">Categoría</th>
                        <th className="w-1/2 pb-5 text-sm font-extrabold tracking-wide">Monto</th>
                        <th className="w-1/2 pb-5 text-sm font-extrabold tracking-wide">Fecha</th>
                        <th className="w-1/4 pb-5 text-sm font-extrabold tracking-wide"></th>
                    </tr>
                </thead>
                <tbody className="text-left text-gray-600">
                    {transactions.slice(-5).map((t) => (
                        <Row key={t.id} transaction={t} handlerDelete={handlerDelete} />
                    ))}
                </tbody>
            </table>
        </motion.div>
    )
}

export default memo(Table)