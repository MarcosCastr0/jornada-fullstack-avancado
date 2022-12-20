import MarcaOcean from '../../assets/brand.svg'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <img src={MarcaOcean} alt="" width={50} />
          </div>
          <div className="col-10">
            <Link className="link" to="/">
              {' '}
              Inicio{' '}
            </Link>
            <Link className="link" to="/cadastro">
              {' '}
              Cadastro{' '}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
