import styled from "styled-components";
import { Props } from '.'


export const Paragraph = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size:${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height:22px;
`
