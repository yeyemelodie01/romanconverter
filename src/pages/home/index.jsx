import '../../utils/styles/home.css'
import '../../utils/styles/bouton.css'
import Converter from '../../components/converter'

function Home() {

  return (
      <div className="parentGrid">
        <div className="firstChildGrid">
          <div>
            <h1 className="titleHome">Romanator</h1>
            <div className="divInputNumber">
              <div>
                <Converter />
              </div>
            </div>
          </div>
        </div>
        <div className="secondChildGrid">
          <div className="divSecondGrid">
            <div id="divParent" className="divFlexSecond">
            </div>
            <button className="btnRegister">Enregistrer en .PDF</button>
          </div>
        </div>
      </div>
  );
}

export default Home;
