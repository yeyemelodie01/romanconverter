import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons'
import LogoRoman from "../../assets/logo.png"
import '../../utils/styles/header.css'

function Header(){
  return(
      <header>
        <nav>
          <ul className="listFlex">
            <li>
              <div className="divImg">
                <img className="styleLogo" src={LogoRoman} alt="logo Roman Date Converter"/>
              </div>
            </li>
            <div className="divFlexLi">
              <li className="liSize">ACCUEIL</li>
              <li className="liSize">À PROPOS</li>
            </div>
          </ul>
          <div className="divDeroulante">
            <button>
              <FontAwesomeIcon icon={ faFlagUsa }/>
            </button>
          </div>
        </nav>
      </header>
    )
}

export default Header;
