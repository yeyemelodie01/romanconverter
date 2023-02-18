import '../../utils/styles/home.css'

function Home() {
  return (
      <div className="parentGrid">
        <div className="firstChildGrid">
          <h1 className="titleHome">Roman Date Converter</h1>
          <h2>Convertisser une date ou un nombre</h2>
          <div>
            <label form='date'/>
            <input id="date" placeholder="Date" type="date"/>
            <button>Convertir</button>
          </div>
        </div>
        <div className="secondChildGrid">
          <div className="contentFlex">
            <div>1</div>
            <div className='border'/>
            <div>I</div>
          </div>
          <div className="contentFlex">
            <div>09</div>
            <div className='border'/>
            <div>IX</div>
          </div>
          <div className="contentFlex">
            <div>1933</div>
            <div className='border'/>
            <div>MCMXCIII</div>
          </div>
        </div>
        <div className="thirdChildGrid">
          <button className="styleButton">Enregistrer en .PDF</button>
        </div>
      </div>
  );
}

export default Home;
