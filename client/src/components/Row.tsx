import { memo } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { Transaction } from '../types/Transaction';

interface Props {
    transaction: Transaction;
    handlerDelete: (id: number) => void;
}

const Row = ({transaction, handlerDelete}: Props) => {
    
    return (
        <tr className="border-t">
            <td className="p-2 text-center">{transaction.category}</td>
            <td className={`p-2 text-center ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}>
                ${transaction.amount}
            </td>
            <td className="p-2  text-center">{transaction.date}</td>
            <td>
                <IoMdCloseCircle
                    onClick={() => handlerDelete(transaction.id)}
                    className="w-[25px] h-[25px] text-[red] cursor-pointer"
                />
            </td>
        </tr>
    )
}

export default memo(Row)