import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import LogoRoman from "../../assets/logo.png"
import '../../utils/styles/header.css'
import '../../utils/styles/bouton.css'
import France from '../../assets/001-france.png'

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
            <label></label>
            <select>
              <option><img src={ France } alt="drapeau de France" className="flagFr"/></option>
              <option><img src={ France } alt="drapeau de France" className="flagFr"/></option>
            </select>
            <button className="btnFlag">
              <img src={ France } alt="drapeau de France" className="flagFr"/>
              <FontAwesomeIcon icon={ faAngleDown }/>
            </button>
          </div>
        </nav>
      </header>
    )
}

export default Header;
