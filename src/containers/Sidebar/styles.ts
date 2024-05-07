import styled from "styled-components";
import { Paragraph } from "../../components/Paragraph/style";



export const Description = styled(Paragraph)`
      margin-top:24px;
      margin-bottom:40px;
`

export const BotaoTema = styled.button`
    font-size:10px;
    font-weight:bold;
    border-radius:8px;
    color:${(props) => props.theme.corDeFundo};
    padding:8px;
    background-color:${(props) => props.theme.corPrincipal};
    cursor: pointer;
`
export const SidebarContainer = styled.div`
  position:sticky;
  top:80px;
  left:0;
  margin-top:20px;

  @media (max-width:768px) {
      margin-bottom:40px;
      text-align:center;
  }
`
