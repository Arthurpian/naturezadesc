import styled from 'styled-components'

const Botao = styled.button`
width: 70px;
height: 50px;
`

function BotaoLogin() {
    return (
        <Botao type="button">Login</Botao>
    )
}

export default BotaoLogin
