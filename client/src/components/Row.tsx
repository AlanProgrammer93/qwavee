import { memo } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { Transaction } from '../types/Transaction';

interface Props {
    transaction: Transaction;
    handlerDelete: (id: number) => void;
}

const Row = ({transaction, handlerDelete}: Props) => {
    
    return (
        <tr>
            <td className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-left">{transaction.category}</td>
            <td className={`w-1/4 mb-4 text-xs font-extrabold tracking-wider text-left ${transaction.type === "income" ? "text-green-600" : "text-red-500"}`}>
                ${transaction.amount}
            </td>
            <td className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-left">{transaction.date}</td>
            <td className=' mb-4 text-xs font-extrabold tracking-wider text-left'>
                <IoMdCloseCircle
                    onClick={() => handlerDelete(transaction.id)}
                    className="w-[23px] h-[23px] text-red-500 cursor-pointer"
                />
            </td>
        </tr>
    )
}

export default memo(Row)