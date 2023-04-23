import { useEffect, useState } from "react"
import { TransactionsContainer } from "./style"
import { api } from "../../services/api"

export const TransactionsTable = () => {

  interface TransactionType {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
  }

  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect( () => {
    api.get('transactions')
    .then( response => setTransactions(response.data.transactions)
    )
  }, [])



  return (
    <TransactionsContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map( transaction => {
              return (
                <tr key={transaction.id}>
                  <td> {transaction.title} </td>
                  <td className={transaction.type}> 
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)} 
                  </td>
                  <td> {transaction.category} </td>
                  <td> 
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))} 
                     </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </TransactionsContainer>
  )
}