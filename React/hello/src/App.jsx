import Title from './Componentes/Title/Title'
import './App.css';
import CardEvento from './Componentes/CardEvento/CardEvento';
import Container from './Componentes/Container/Container'

function App() {
  return (
    <div className="App">
      <h1>Hello World React</h1>
      <Title nome="Eduardo" sobrenome="Pasqualetti" />
      <br /><br />
      <Container>
        <CardEvento titulo="Iniciando React" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta veritatis," textoLink="Participar" />
        <CardEvento titulo="HTML CSS" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta veritatis," textoLink="Participar" />
        <CardEvento titulo="APi/JSON" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta veritatis," textoLink="Participar" />
        <CardEvento titulo="JavaScript" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta veritatis," textoLink="Participar" />
        <CardEvento titulo="SqlServer" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta veritatis," textoLink="Participar" />
      </Container>
    </div>
  );
}

export default App;
