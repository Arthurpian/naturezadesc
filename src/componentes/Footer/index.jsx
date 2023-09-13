import styled from 'styled-components';
import Logo from '../Logo';
import Facebook from '../../img/icones/facebook.png';
import Instagram from '../../img/icones/instagram.png';
import Whatsapp from '../../img/icones/whatsapp.png';
import Youtube from '../../img/icones/youtube.png';
import '@fontsource/lato';
import '@fontsource/mochiy-pop-one';
import '@fontsource/poppins';

const Container = styled.div`
background-color: #ebb92b;
display: flex;
flex-direction: column;
justify-content: center;
padding: 5px;
align-items: center;
`;

const Topicos = styled.div`
  display: flex;
  padding: 5px;
`;

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Titulo = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #fff;
`;

const Subtitulos = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
`;

const Icone = styled.div`
    display:flex;
    justify-content: center;
    cursor: pointer;
`;

const Img = styled.img`
  width: 2%;
  height: 2%;
  border-radius: 20px;
  padding: 2px;
`;

function Footer() {
  return (
    <Container>
      <Logo />
      <Topicos>
        <FooterComponent>
          <Titulo>Sobre Nós</Titulo>
          <Subtitulos>Quem somos</Subtitulos>
          <Subtitulos>Recursos e políticas</Subtitulos>
          <Subtitulos>Carreiras</Subtitulos>
          <Subtitulos>Segurança e confiança</Subtitulos>
          <Subtitulos>Fale conosco</Subtitulos>
        </FooterComponent>
        <FooterComponent>
          <Titulo>Explore</Titulo>
          <Subtitulos>Faça uma avaliação</Subtitulos>
          <Subtitulos>Adicione um local</Subtitulos>
          <Subtitulos>Central de ajuda</Subtitulos>
          <Subtitulos>Artigos sobre viagens</Subtitulos>
        </FooterComponent>
        <FooterComponent>
          <Titulo>Faça negócios conosco</Titulo>
          <Subtitulos>Proprietários</Subtitulos>
          <Subtitulos>Anúncios patrocinadosl</Subtitulos>
          <Subtitulos>Anuncie conosco</Subtitulos>
        </FooterComponent>
      </Topicos>
      <Icone>
        <Img src={Facebook}></Img>
        <Img src={Instagram}></Img>
        <Img src={Whatsapp}></Img>
        <Img src={Youtube}></Img>
      </Icone>
    </Container>
  );
}

export default Footer;
