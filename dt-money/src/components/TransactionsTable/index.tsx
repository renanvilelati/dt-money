import { useContext } from "react"
import { TransactionsContainer } from "./style"
import { TransactionsContext } from "../../contexts/TransactionsContexts"

export const TransactionsTable = () => {

  const {transactions} = useContext(TransactionsContext)

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