.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 6 / 6; }
.div2 { grid-area: 1 / 1 / 2 / 6; }
.div3 { grid-area: 2 / 1 / 3 / 6; }
.div4 { grid-area: 3 / 1 / 4 / 6; }

function Home() {
  return (
    <div className="App">
      <div className="parent">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
      </div>
    </div>
  );
}

export default Home;
