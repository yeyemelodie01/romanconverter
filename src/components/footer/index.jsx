import '../../utils/styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSun as farFaSun } from '@fortawesome/free-regular-svg-icons'

library.add(farFaSun)

function Footer(){
  return (
    <footer>
      <FontAwesomeIcon icon={ faGithub } />
      <p>Design by Mélodie Yéyé</p>
      <FontAwesomeIcon icon={ farFaSun } />
    </footer>
  )
}

export default Footer;
