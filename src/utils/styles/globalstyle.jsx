import { createGlobalStyle } from 'styled-components'
//import colors from './colors'
import { ThemeContext } from '../context'
import { useContext } from 'react'

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
  background-color: ${({ isDarkMode }) => isDarkMode ? '#333333' : '#F1F1F1'};
  color: ${({ isDarkMode }) => isDarkMode ? '#F1F1F1' : '#333333'};
}

.btnInput{
  border-color: ${({ isDarkMode }) => isDarkMode ? '#F1F1F1' : '#333333'};
  background-color: ${({ isDarkMode }) => isDarkMode ? '#F1F1F1' : '#333333'};
  color: ${({ isDarkMode }) => isDarkMode ? '#333333' : '#FFF'};
}

.footerName{
  color: ${({ isDarkMode }) => isDarkMode ? '#F1F1F1' : '#333333'};
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
  const { theme } = useContext(ThemeContext)
return(
  <Styleglobal isDarkMode={theme === 'dark'}/>
)
}

export default GlobalStyle
