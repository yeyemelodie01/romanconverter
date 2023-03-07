import { useState } from 'react'
import '../../utils/styles/header.css'
import '../../utils/styles/bouton.css'
import France from '../../assets/french-guiana.svg'
import USA from '../../assets/united-states.svg'
import arrowDown from '../../assets/angle-arrow-down_icon-icons.com_73683.svg'

function Header(){
  const [ showBurger, setShowBurger ] = useState(false);

  function BtnChangeLangue() {
    let list = document.getElementById('listScrolling');
    list.style.display = { 'block': 'none' };
  }

  return(
      <header>
        <nav>
          <div className="divImg">
            <h1>XXIX</h1>
            <ul className="listFlex">
              <div className="divFlexLi">
                <li className="liSize">ACCUEIL</li>
                <li><span>|</span></li>
                <li className="liSize">À PROPOS</li>
              </div>
            </ul>
          </div>
          <div>

          </div>

            {/*<div className="divScrolling">*/}
            {/*  <button className="btnFlag" onClick={ BtnChangeLangue }>*/}
            {/*    <img src={ France } alt="drapeau de France" className="flag"/>*/}
            {/*    <img src={ arrowDown } alt="pointe de flèche" className="arrowHead"/>*/}
            {/*  </button>*/}
            {/*  <ul id="listScrolling" className="listScrolling">*/}
            {/*    <li>*/}
            {/*      <img src={ USA } alt="drapeau des état-unis" className="flag"/>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}

        </nav>
      </header>
    )
}

export default Header;
