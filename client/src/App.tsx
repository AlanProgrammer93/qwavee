import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
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
  const { loading } = useSelector((state: RootState) => state.transactions);
  const [modalForm, setModalForm] = useState(false)

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
                className="fixed text-lg w-[80%] px-4 py-2 bg-[color:var(--color-primary-dark)] text-white rounded-lg hover:bg-[color:var(--color-primary)] mt-4 cursor-pointer"
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="dark"
        style={{ zIndex: '999999' }}
      />
    </div>
  )
}

export default App
