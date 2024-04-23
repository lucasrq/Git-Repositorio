import styled from 'styled-components'
import EstiloGlobal from './styles'
type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'pink')};
  font-size : ${(props) => props.fontSize || '16px'}
`

const BotaoPerigo = styled(Botao)`
background-color:red;
font-size:20px;

span{
  text-decoration:line-through;
}
`

function teste() {
  return (<>
    <Botao principal> enviar</Botao>
    <Botao fontSize='18px' principal={false}>Cancelar</Botao>
    <BotaoPerigo as="a" principal fontSize='200px'>
      <span>Nao clique</span>
    </BotaoPerigo>
  </>

  )
}


export default teste
