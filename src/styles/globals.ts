import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: ${props => props.theme.colors.primary};
  --background: ${props => props.theme.colors.background};
  --text: ${props => props.theme.colors.text};
  --text-100: #838387;

  --error: #e52e54;

  --black: #090b10;
  --black-10: #15141b;

  --white: #ffffff;

  --border: #16181D;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  color: var(--text);
}

body,
input,
textarea,
select,
button {
  font-family: var(--font-inter);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--text);
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`
