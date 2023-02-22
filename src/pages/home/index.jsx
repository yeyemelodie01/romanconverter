import '../../utils/styles/home.css'
import '../../utils/styles/bouton.css'


function Home() {
  return (
      <div className="parentGrid">
        <div className="firstChildGrid">
          <div>
            <h1 className="titleHome">Romanator</h1>
            <div className="divInputNumber">
              <h2 className="subTitleHome">Convertisser votre nombre</h2>
              <div>
                <label form='number'/>
                <input id="number" className="inputStyle" placeholder="Entrez votre nombre" type="text"/>
                <button className="btnInput">Convertir</button>
              </div>
            </div>
          </div>
        </div>
        <div className="secondChildGrid">
          <div className="divSecondGrid">
            <div className="divFlexSecond">
              <div className="contentFlex">
                <div className="normalNumber">1</div>
                <div>
                  <div className="border"/>
                  <div className="romanNumber">I</div>
                </div>
              </div>
              <div className="contentFlex">
                <div className="normalNumber">09</div>
                <div>
                  <div className="border"/>
                  <div className="romanNumber">IX</div>
                </div>
              </div>
              <div className="contentFlex">
                <div className="normalNumber">1993</div>
                <div>
                  <div className="border widthYear"/>
                  <div className="romanNumber">MCMXCIII</div>
                </div>
              </div>
            </div>
            <button className="btnRegister">Enregistrer en .PDF</button>
          </div>

        </div>
      </div>
  );
}

export default Home;
