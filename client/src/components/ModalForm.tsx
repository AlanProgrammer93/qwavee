import { useRef, useState } from "react";
import useClickOutside from "../utils/clickOutside";

interface Props {
    setModalForm: (modalForm: boolean) => void;
}

const ModalForm = ({ setModalForm }: Props) => {
    const popup = useRef(null);
    useClickOutside(popup, () => setModalForm(false));

    const [transaction, setTransaction] = useState({
        type: '',
        category: '',
        amount: ''
    })

    /* const { type, category, amount } = transaction; */

    return (
        <div className='blur'>
            <div className='modal_container' ref={popup}>
                <h1 className='modal_title'>Nueva Transaccion</h1>
                <div className='bottom_close' onClick={() => setModalForm(false)}>
                    {/* <IoMdCloseCircle /> */}
                </div>
                <div className='modal_form'>
                    

                    <button className='modal_button'>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalForm