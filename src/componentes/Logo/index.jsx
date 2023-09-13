import styled from 'styled-components'
import '@fontsource/lato';
import '@fontsource/mochiy-pop-one';
import '@fontsource/poppins';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    font-family: 'Lato', sans-serif;
`


const NaturezaText = styled.strong`
    color: #00A86B /* Define a cor do texto para #44786c (um tom de verde-azulado) */  
`
const DescobertaText = styled.strong`
    color: #FFFFFF /* Define a cor do texto para #44786c (um tom de verde-azulado) */  
`

function Logo() {
    return (
        <LogoContainer>
            <p><NaturezaText>Natureza</NaturezaText><DescobertaText>Descoberta</DescobertaText></p>
       </LogoContainer>
    )
}

export default Logo
