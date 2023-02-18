import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import LogoRoman from "../../assets/logo.png"
import '../../utils/styles/header.css'

function Header(){
  return(
      <header>
        <nav>
          <div className="divImg">
              <img className="styleLogo" src={LogoRoman} alt="logo Roman Date Converter"/>
          </div>
          <ul className="listFlex">
            <li className="liSize">ACCUEIL</li>
            <li className="liSize">À PROPOS</li>
            <li>
              <button>
                <FontAwesomeIcon icon={faCoffee}/>
              </button>
              <ul>
                <li></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;
