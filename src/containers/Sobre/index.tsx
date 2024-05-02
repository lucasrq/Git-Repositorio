import exp from "constants";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { GithubSecao } from "./styles";
const Sobre = () => (
  <section>
    <Title fontSize={14}>Sobre mim</Title>
    <Paragraph tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam sed omnis est quo, praesentium, quia repellat iusto repudiandae voluptatem doloribus unde nemo aut eius, officiis voluptate ex architecto numquam.
    </Paragraph>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=lucasrq&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucasrq&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
export default Sobre
