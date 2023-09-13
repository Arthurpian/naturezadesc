import {  } from 'react'
import Header from './componentes/Header'
import styled from 'styled-components'
import Banner from './componentes/Banner'
import Destaques from './componentes/Destaques'
import Aventura from './componentes/Aventura'
import Footer from './componentes/Footer'

const AppContainer = styled.div`
    background-image: #E0E0E0;
    width: 100vw;
    height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Banner />
      <Destaques />
      <Aventura />
      <Footer />
    </AppContainer>
  );
}

export default App