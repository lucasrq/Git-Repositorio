import Avatar from "../../components/Avatar"
import Paragraph from "../../components/Paragraph"
import Title from "../../components/Title"
import { Description, BotaoTema, SidebarContainer } from "./styles"



const Sidebar = (props) => (
  <aside>
    <SidebarContainer>

      <Avatar />
      <Title fontSize={15}>Lucas Rodrigues</Title>
      <Paragraph fontSize={16}>lucasrqs</Paragraph>

      <Description fontSize={12} tipo="principal">Engenheiro Front-end</Description>

      <BotaoTema onClick={props.TrocaTheme}>Trocar tema</BotaoTema>

    </SidebarContainer>
  </aside >
)

export default Sidebar
