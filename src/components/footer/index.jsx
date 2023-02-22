import '../../utils/styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSun as farFaSun } from '@fortawesome/free-regular-svg-icons'

library.add(farFaSun)

function Footer(){
  return (
    <footer>
      <div className="gridFooter">
        <FontAwesomeIcon className="iconGit" icon={ faGithub } />
        <div className="divCopyright">
          <p>Design by Mélodie Yéyé</p>
          <FontAwesomeIcon icon={ farFaSun } />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
