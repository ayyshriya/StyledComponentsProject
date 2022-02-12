import { ThemeProvider } from 'styled-components';
import Header from './components/header.js';
import { Container } from './components/styled/container.styled.js'
import GlobalStyles from './components/styled/global.js';
import content from './content'
import Card from './components/card.js';
import Footer from './components/styled/footer.js';
const theme = {
colors:
  {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
       <GlobalStyles />
        <Header />
        <Container>
          {content.map( (item , index) => (
              <Card key={index} item= {item}/>
          ))}
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
