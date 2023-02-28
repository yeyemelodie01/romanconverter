import LogoRoman from "../../assets/logo.png"
import '../../utils/styles/header.css'
import '../../utils/styles/bouton.css'
import France from '../../assets/french-guiana.svg'
import arrowDown from '../../assets/angle-arrow-down_icon-icons.com_73683.svg'

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
              <img src={ arrowDown } alt="drapeau de France" className="flagFr"/>
            </button>
          </div>
        </nav>
      </header>
    )
}

export default Header;
