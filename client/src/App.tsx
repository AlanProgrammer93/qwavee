import { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Graphic from './components/Graphic'
import Table from './components/Table'
import ModalForm from './components/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from './store/transactionReducer';
import { AppDispatch, RootState } from './store';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch<AppDispatch>()

  const [modalForm, setModalForm] = useState(false)
  const { transactions, loading } = useSelector((state: RootState) => state.transactions);
  console.log(transactions);
  console.log(loading);


  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100 gap-5'>
      {
        loading ? <Spinner />
          : (
            <>
              <button onClick={() => setModalForm(true)}
                className="fixed w-[80%] px-4 py-2 bg-blue-500  text-white rounded-lg hover:bg-blue-600 mt-5 cursor-pointer"
              >
                Nueva Transaccion
              </button>
              <Cards />
              <Graphic />
              <Table />
            </>
          )
      }
      {
        modalForm && <ModalForm setModalForm={setModalForm} />
      }
    </div>
  )
}

export default App
