import '../../utils/styles/home.css'
import '../../utils/styles/bouton.css'
import Converter from '../../components/converter'
import { useTranslation } from 'react-i18next'

function Home() {
  const [ t ] = useTranslation('common');

  return (
      <div className="parentGrid">
        <div className="firstChildGrid">
          <div>
            <h1 className="titleHome">Romanator</h1>
            <h2 className="subTitleHome">{ t('home.description') }</h2>
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
