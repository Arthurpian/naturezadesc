import Logo from '../Logo/index'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'
import BotaoLogin from '../BotaoLogin'

const HeaderContainer = styled.header`
    background-color: #ebb92b;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <BotaoLogin/>
        </HeaderContainer>
    )
}

export default Header