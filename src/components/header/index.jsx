import LogoRoman from "../../assets/logo.png"

function Header(){
  return(
      <header>
        <nav>
          <div>
              <img src={LogoRoman} alt="logo Roman Date Converter"/>
          </div>
          <ul>
            <li>Accueil</li>
            <li>À propos</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;
