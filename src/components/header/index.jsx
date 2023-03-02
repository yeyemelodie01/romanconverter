import LogoRoman from "../../assets/logo.png"
import '../../utils/styles/header.css'
import '../../utils/styles/bouton.css'
import France from '../../assets/french-guiana.svg'
import USA from '../../assets/united-states.svg'
import arrowDown from '../../assets/angle-arrow-down_icon-icons.com_73683.svg'

function Header(){
  function BtnChangeLangue() {
    let list = document.getElementsByClassName('listScrolling');
    list.style.display = 'block'
  }

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
          <div className="divScrolling">
            <button className="btnFlag" onClick={ BtnChangeLangue }>
              <img src={ France } alt="drapeau de France" className="flagFr"/>
              <img src={ arrowDown } alt="pointe de flèche" className="arrowHead"/>
            </button>
            <ul id="" className="listScrolling">
              <li>
                <img src={ USA } alt="drapeau des état-unis"/>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header;
