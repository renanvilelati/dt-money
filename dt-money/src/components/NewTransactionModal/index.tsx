import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { NewTransactionModalContainer, TransactionTypeContainer } from './styles';
import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName={'react-modal-overlay'}
    className={'react-modal-content'}
  >

    <button 
    className='react-modal-close' 
    type='button' 
    onClick={onRequestClose}
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>

    <NewTransactionModalContainer>
    <h2>Cadastrar Transação</h2>

    <input 
    type="text" 
    placeholder='Título'
    />

    <input 
    type="number" 
    placeholder='Valor'
    />

    <TransactionTypeContainer>
      <button>
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
      </button>
      <button>
        <img src={outcomeImg} alt="Saída" />
        <span>Saída</span>
      </button>
    </TransactionTypeContainer>

    <input 
    type="text" 
    placeholder='Categoria'
    />

    <button type='submit'>Cadastrar</button>

    </NewTransactionModalContainer>
    
  </Modal>
  )
}