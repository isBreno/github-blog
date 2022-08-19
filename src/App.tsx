import { Header } from './components/Header';
import { Container } from './globalStyle'
import { Router } from './Router'


function App() {
  return (
    <>
        <Header />
      <Container>
        <Router />
      </Container>
    </>
  );
}

export default App
