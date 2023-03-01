import { createGlobalStyle } from 'styled-components'
//import colors from './colors'

const Styleglobal = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  font-family: 'Roboto', 'serif';
}

body {
  margin: 0;
  text-align: center;
  background-color: #F1F1F1;
  color: #333333;
}

img {
  object-fit: contain;
}

a {
  text-decoration: none;

}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

li {
    list-style: none;
}
`

function GlobalStyle() {
return(
<Styleglobal />
)
}

export default GlobalStyle
