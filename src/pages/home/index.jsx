import '../../utils/styles/home.css'
import '../../utils/styles/bouton.css'


function Home() {
  return (
      <div className="parentGrid">
        <div className="firstChildGrid">
          <h1 className="titleHome">Convertisseur de Chiffre Romain</h1>
          <h2 className="subTitleHome">Convertisser un nombre</h2>
          <div>
            <label form='number'/>
            <input id="number" className="inputStyle" placeholder="Entrez votre nombre" type="text"/>
            <button className="buttonInpput">Convertir</button>
          </div>
        </div>
        <div className="secondChildGrid">
          <div className="contentFlex">
            <div className="normalNumber">1</div>
            <div className='border'/>
            <div className="romanNumber">I</div>
          </div>
          <div className="contentFlex">
            <div className="normalNumber">09</div>
            <div className='border'/>
            <div className="romanNumber">IX</div>
          </div>
          <div className="contentFlex">
            <div className="normalNumber">1933</div>
            <div className="border widthYear"/>
            <div className="romanNumber">MCMXCIII</div>
          </div>
        </div>
        <div className="thirdChildGrid">
          <button className="styleButton">Enregistrer en .PDF</button>
        </div>
      </div>
  );
}

export default Home;
