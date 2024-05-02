import { Paragraph as ParagraphStyles } from "./style"

export type Props = {
  children: string;
  fontSize?: number;
  tipo?: 'principal' | 'secundario';
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => <ParagraphStyles tipo={tipo}>{children}</ParagraphStyles>



export default Paragraph


