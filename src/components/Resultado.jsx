import styled from '@emotion/styled';

const Contenedor = styled.div`
  color: #2f2e41;
  font-family: 'Lato', sans-serif;

  @media (max-width: 500px) {
    display: grid;
    text-align: center;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 150px;
  @media (max-width: 500px) {
    margin-left: 20%;
  }
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} =
    resultado;

  const hoje = new Date();
  const horaAtual = hoje.toLocaleTimeString();

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt='imagen cripto'
      />
      <div>
        <Precio>
          Valor: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Máxima do dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Mínima do dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variação 24h: <span>{CHANGEPCT24HOUR}%</span>
        </Texto>
        <Texto>
          Última atualização: <span>{horaAtual}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
