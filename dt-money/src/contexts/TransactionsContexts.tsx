import { createContext, useEffect, useState, ReactNode } from 'react'
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
  createTransaction: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export const TransactionProvider = ({children}: TransactionsProviderProps) => {

  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect( () => {
    api.get('transactions')
    .then( response => setTransactions(response.data.transactions)
    )
  }, [])

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}