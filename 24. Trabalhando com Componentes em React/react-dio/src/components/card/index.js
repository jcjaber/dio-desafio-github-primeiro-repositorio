import { useState } from 'react';
import Button from '../button';

const Card = () => {

  const [valor, setValor] = useState(0);

  function Adicionar () {
    setValor(valor + 1)
  }

  function Remover () {
    setValor(valor - 1)
  }

  return (
    <div className="card">
  <div className="card-header">
    Meu primeiro Card
  </div>
  <div className="card-body">
    <p>{valor}</p>
    <Button
      className="btn btn-success"
      onClick={Adicionar}
    >
      Adicionar
    </Button>
    <Button
      className="btn btn-danger"
      onClick={Remover}
    >
      Remover
    </Button>
  </div>
</div>
  )
}

export default Card;