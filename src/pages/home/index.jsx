import styled from 'styled-components'

const ParenGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const Grid1 = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  background-color: aqua;
  height: 200px;
  display: flex;
  justify-content: center;
`

const Grid2 = styled.div`
  grid-area: 2 / 1 / 3 / 6;
  background-color: cadetblue;
`

const Grid3 = styled.div`
  grid-area: 3 / 1 / 4 / 6;
  background-color: cornflowerblue;
`

function Home() {
  return (
      <ParenGrid>
        <Grid1>
          <div>
            <label form='date'/>
            <input id="date" placeholder="Date" type="date"/>
            <button>Convertir</button>
          </div>
        </Grid1>
        <Grid2>
          <div className="Flex">
            <div>1</div>
            <div className="border"></div>
            <div>I</div>
          </div>
          <div>

          </div>
          <div>

          </div>
        </Grid2>
        <Grid3>
          <button>Enregistrer en .PDF</button>
        </Grid3>
      </ParenGrid>
  );
}

export default Home;
