import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {

  return (
    <Container>
      <Content>
      <h2>Finance.</h2>
      <button onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>


      </Content>
    </Container>
  )
}