import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../contexts/TransactionsContexts'

import { SummaryContainer } from "./styles"

import {useContext} from 'react'



export const Summary = () => {

  const {transactions} = useContext(TransactionsContext)

  console.log(transactions);
  
  
  return (
    <SummaryContainer>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$ 5000,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </SummaryContainer>
  )
}