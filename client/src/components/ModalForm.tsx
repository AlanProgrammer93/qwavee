import { useRef, useState } from "react";
import { toast } from 'react-toastify';
import { IoMdCloseCircle } from 'react-icons/io'
import useClickOutside from "../utils/clickOutside";
import SelectCustom from "./SelectCustom";
import clientAxios from "../utils/axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { updateTransactions } from "../store/transactionReducer";

interface Props {
    setModalForm: (modalForm: boolean) => void;
}

const CategoryIncome = [
    "Salario",
    "Extras",
    "Regalos"
]

const CategoryExpense = [
    "Comida",
    "Transporte",
    "Entretenimiento",
]

const ModalForm = ({ setModalForm }: Props) => {
    const dispatch = useDispatch<AppDispatch>()
    const popup = useRef(null);
    useClickOutside(popup, () => setModalForm(false));

    const [transaction, setTransaction] = useState({
        type: '',
        category: '',
        amount: ''
    })

    const { type, category, amount } = transaction;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTransaction(prev => ({ ...prev, [name]: value }));
    }

    const handleSave = async () => {
        if (!type || !category || !amount) {
            toast.error("Debes completar todos los campos.");
            return
        }

        await clientAxios.post('/transaction', transaction)
            .then(res => {
                setTransaction({ type: '', category: '', amount: '' })
                dispatch(updateTransactions(res.data.transaction))
                toast.success(res.data.message);
            })
            .catch(err => {
                toast.error(err.response.data.message)
            })
    };
    
    return (
        <div className='custom_blur'>
            <div className='fixed w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 min-h-[75vh] bg-white shadow-md rounded-lg p-8 border-1 border-[color:var(--color-primary)]' ref={popup}>
                <h1 className='text-center text-[color:var(--color-primary)] mb-4 text-xl'>Nueva Transaccion</h1>
                <div className='absolute text-[red] cursor-pointer right-[1.2rem] top-[1.2rem]' onClick={() => setModalForm(false)}>
                    <IoMdCloseCircle className="w-[25px] h-[25px]" />
                </div>
                <div className="flex flex-col">
                    <SelectCustom name="type" value={type} title="Tipo" items={["income", "expense"]} handleChange={handleChange} />
                    <SelectCustom name="category" value={category} title="Categoria" items={type === "income" ? CategoryIncome : CategoryExpense} handleChange={handleChange} />
                    <div className='flex flex-col gap-[5px] mt-5 mb-2.5'>
                        <h2 className="text-xl text-[color:var(--color-primary)]">Monto</h2>
                        <input
                            className='border-[color:var(--color-primary)] h-11 text-[color:var(--color-primary)] font-[bold] pl-[15px] rounded-[10px] border-2 border-solid'
                            type={'number'}
                            min={1}
                            name={'amount'}
                            value={amount}
                            placeholder="Ingrese el monto"
                            onChange={handleChange}
                        />
                    </div>

                    <button onClick={handleSave} className='text-xl hover:bg-[color:var(--color-primary-dark)] bg-[color:var(--color-primary)] text-white cursor-pointer mt-9 p-3 rounded-[5px] border-[none]'>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalForm