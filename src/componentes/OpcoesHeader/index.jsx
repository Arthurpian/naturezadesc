import styled from 'styled-components'
import '@fontsource/lato';
import '@fontsource/mochiy-pop-one';
import '@fontsource/poppins';

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    font-family: 'Lato', sans-serif;
`

const Opcoes = styled.ul`
    display: flex;
    color: black;
`

const textoOpcoes = ['Inicio', 'Natureza', 'Aventura','Blog','Contato']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader