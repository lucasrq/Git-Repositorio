import React from 'react';
import { useState } from 'react';
import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';
import { ThemeProvider } from 'styled-components';
import themeLight from './themes/light';
import themeDark from './themes/dark';
import { BotaoTema } from './containers/Sidebar/styles';
function App() {

  const [UserTheme, SetUserTheme] = useState(false)

  function trocaTheme() {
    SetUserTheme(!UserTheme)

  }

  return (
    <ThemeProvider theme={UserTheme ? themeLight : themeDark}>
      <EstiloGlobal />
      <Container>
        <Sidebar TrocaTheme={trocaTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>

    </ThemeProvider>

  );
}

export default App;
