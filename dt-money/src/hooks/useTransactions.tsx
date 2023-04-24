import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

interface TransactionType {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

type TransactionInput = Omit<TransactionType, 'id' | 'createdAt'>

interface TransactionsContextData {
  transactions: TransactionType[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export const TransactionProvider = ({children}: TransactionsProviderProps) => {

  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect( () => {
    api.get('transactions')
    .then( response => setTransactions(response.data.transactions)
    )
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}