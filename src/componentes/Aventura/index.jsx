import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import '@fontsource/lato';
import '@fontsource/mochiy-pop-one';
import '@fontsource/poppins';
import seta01 from '../../img/icones/seta-direita.png'

const Container = styled.div`
  padding: 50px;
  padding-top: 1px;
  max-width: 100vw;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParteEsquerda = styled.div`
  font-family: 'Lato', sans-serif;
`;

const Titulo = styled.h1`
  font-size: 32px;
  margin-bottom: 8px;
  color: #00A86B;
`;

const Titulo_1 = styled.h1`
  font-size: 26px;
  margin-bottom: 8px;
  color: #000000;
  font-family: 'Lato', sans-serif;
  text-align:center;
  
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-family: 'Lato', sans-serif;
`;

const ParteDireita = styled.div`
  text-align: right;
`;

const Botao = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid black;
`;

const Carosel = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
`;

const Item = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
`;

const Img = styled.img`
  width: 350px;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Buttons = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  padding: 10px;
`;

const Imagens_dire = styled.img`
  transform: rotate(180deg);
  width: 2%;
  height: 2%;
`;

const Imagens = styled.img`
  width: 2%;
  height: 2%;
`;

function Aventura() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:5173/src/dados/Aventuras.json')
      .then((response) => response.json())
      .then(setData)
      .catch((error) => {
        console.error('Erro ao carregar os dados:', error);
      });
  };

  const scrollCarousel = (offset) => {
    if (carousel.current) {
      carousel.current.scrollLeft += offset;
    }
  };

  if (!data?.length) return null;

  return (
    <Container>
      <Topo>
        <ParteEsquerda>
          <Titulo>Aventura</Titulo>
          <Subtitulo>Venha explorar e se aventurar.</Subtitulo>
        </ParteEsquerda>
        <ParteDireita>
          <Botao>Veja Mais</Botao>
        </ParteDireita>
      </Topo>
      <Carosel ref={carousel}>
        {data.map((item) => {
          const { id, name, endereco, image } = item;
          return (
            <div className="item" key={id}>
              <Item>
                <div className="imagem">
                  <Img src={image} alt={name}></Img>
                </div>
                <Info>
                  <Titulo_1>{name}</Titulo_1>
                  <Subtitulo>{endereco}</Subtitulo>
                </Info>
              </Item>
            </div>
          );
        })}
      </Carosel>
      <Buttons>
        <Button onClick={() => scrollCarousel(-carousel.current.offsetWidth)}>
          <Imagens_dire src={seta01} alt="seta" />
        </Button>
        <Button onClick={() => scrollCarousel(carousel.current.offsetWidth)}>
          <Imagens src={seta01} alt="seta" />
        </Button>
      </Buttons>
    </Container>
  );
}

export default Aventura;

