import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import '../../utils/styles/footer.css'


function Footer(){
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <footer>
      <div className="gridFooter">
        <div className="divCopyright">
          <p>© 2023 Made with love by <span className="footerName">Mélodie Yéyé</span></p>
          <button onClick={() => toggleTheme()} className="btnLight">
            {theme === 'light' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
