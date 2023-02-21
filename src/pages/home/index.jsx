import '../../utils/styles/home.css'
import '../../utils/styles/bouton.css'


function Home() {
  return (
      <div className="parentGrid">
        <div className="firstChildGrid">
          <h1 className="titleHome">Convertisseur de Chiffre Romain</h1>
          <div className="divInputNumber">
            <h2 className="subTitleHome">Convertisser votre nombre puis enregistrer-le en PDF</h2>
            <div>
              <label form='number'/>
              <input id="number" className="inputStyle" placeholder="Entrez votre nombre" type="text"/>
              <button className="btnInput">Convertir</button>
            </div>
          </div>
        </div>
        <div className="secondChildGrid">
          <div className="contentFlex">
            <div className="normalNumber">1091993</div>
            <div>
              <div className="border widthYear"/>
              <div className="romanNumber">IIXMCMXCIII</div>
            </div>
            <button className="btnRegister">Enregistrer en .PDF</button>
          </div>
        </div>
      </div>
  );
}

export default Home;
