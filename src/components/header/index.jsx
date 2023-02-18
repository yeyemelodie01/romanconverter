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
          </ul>
        </nav>
      </header>
    )
}

export default Header;
