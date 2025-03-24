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
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector((state: RootState) => state.transactions);
  const [modalForm, setModalForm] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);
  
  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100'>
      {
        loading ? <Spinner />
          : (
            <>
              <Navbar state={showSidebar} setState={setShowSidebar} />
              <div className='w-full flex'>
                <div className='md:w-64 h-screen'>
                  <Sidebar state={showSidebar} setState={setShowSidebar} showModal={modalForm} setShowModal={setModalForm} />
                </div>
                <div className='flex-1 flex flex-col items-center p-6 gap-3'>
                  <Cards />
                  <Graphic />
                  <Table />
                </div>
              </div>
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
