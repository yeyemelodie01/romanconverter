import '../../utils/styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer(){
  return (
    <footer>
      <FontAwesomeIcon icon={ faGithub } />
      <p>Design by Mélodie Yéyé</p>
    </footer>
  )
}

export default Footer;
