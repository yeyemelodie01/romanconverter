import '../../utils/styles/home.css'
import '../../utils/styles/bouton.css'
import Converter from '../../components/converter'

function Home() {

  return (
      <div className="parentGrid">
        <div className="firstChildGrid">
          <div>
            <h1 className="titleHome">Romanator</h1>
            <h2 className="subTitleHome">Transformez les chiffres en histoire avec Romanator - convertisseur de chiffres et dates en chiffres romains !</h2>
            <div className="divInputNumber">
              <div className="divConverter">
                <Converter />
              </div>
            </div>
          </div>
        </div>
        <div className="secondChildGrid">
          <div className="divSecondGrid">
            <div id="divParent" className="divFlexSecond">
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
