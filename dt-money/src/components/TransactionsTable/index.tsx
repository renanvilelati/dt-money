import { TransactionsContainer } from "./style"

export const TransactionsTable = () => {
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
          <tr>
            <td> Desenvolvimento </td>
            <td className="deposit"> R$ 10,000 </td>
            <td> Desenvolvimento </td>
            <td> 20/02/2023 </td>
          </tr>
          <tr>
            <td> Aluguel </td>
            <td className="withdraw"> R$ 1,000 </td>
            <td> Casa </td>
            <td> 20/02/2023 </td>
          </tr>
        </tbody>
      </table>
    </TransactionsContainer>
  )
}