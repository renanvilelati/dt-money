import { useState, FormEvent } from 'react'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { NewTransactionModalContainer, RadioBox, TransactionTypeContainer } from './styles';
import Modal from 'react-modal'
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)

  const [type, setType] = useState('deposit')

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault()
    const data = {
      title,
      category,
      value,
      type
    }

    api.post('/transactions', data)
    
  }

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

    <NewTransactionModalContainer onSubmit={handleCreateNewTransaction}>
    <h2>Cadastrar Transação</h2>

    <input 
    type="text" 
    placeholder='Título'
    value={title}
    onChange={ e => setTitle(e.target.value)}
    />

    <input 
    type="number" 
    placeholder='Valor'
    value={value}
    onChange={ e => setValue(Number(e.target.value))}
    />

    <TransactionTypeContainer>      
      <RadioBox 
      isActive={type === 'withdraw'}
      activeColor='green'
      type='button'
      onClick={ () => setType('deposit')}>
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
      </RadioBox>

      <RadioBox 
      isActive={type === 'deposit'}
      activeColor='red'
      type='button'
      onClick={ () => setType('withdraw')}>
        <img src={outcomeImg} alt="Saída" />
        <span>Saída</span>
      </RadioBox>
    </TransactionTypeContainer>

    <input 
    type="text" 
    placeholder='Categoria'
    value={category}
    onChange={ e => setCategory(e.target.value)}
    />

    <button type='submit'>Cadastrar</button>

    </NewTransactionModalContainer>
    
  </Modal>
  )
}