import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../utils/styles/header.css'
import '../../utils/styles/bouton.css'
import France from '../../assets/french-guiana.svg'
import USA from '../../assets/united-states.svg'

function Header(){
  const [ showBurger, setShowBurger ] = useState(false);
  const { i18n } = useTranslation('common');
  const changeLanguage = async(lng) => {
    await i18n.changeLanguage(lng);
  };

  return(
      <header>
        <nav>
          <h1 className="logo">XXIX</h1>
          <div className="divNavContent">
            <div className={ showBurger ? "divRoute" : "divRoute" }>
              <a href="/">ACCUEIL</a>
            </div>
            <div className="btnBurger" onClick={() => {setShowBurger(!showBurger);}}></div>

            <div className="divScrolling">
              <button className="btnFlag" onClick={() => changeLanguage('fr')}>
                <img src={ France } alt="drapeau de France" className="flagFr"/>
              </button>
              <button className="btnFlag" onClick={() => changeLanguage('en')}>
                <img src={ USA } alt="drapeau des état-unis" className="flagEn"/>
              </button>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;
