
import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Dashboard } from './components/Dashboard'
import { TransactionsProvider }  from './TransactionsContext'
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

function App() {

  const [ isNewTrasactionModalOpen, setIsNewTrasactionModalOpen ] = useState<boolean>(false);

  function hadleOpenModal(){
      setIsNewTrasactionModalOpen(true);
  }

  function hadleCloseModal(){
      setIsNewTrasactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpen={hadleOpenModal}  />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTrasactionModalOpen} onRequestClose={hadleCloseModal} />

      <GlobalStyle />
     
    </TransactionsProvider>
  )
}

export default App
