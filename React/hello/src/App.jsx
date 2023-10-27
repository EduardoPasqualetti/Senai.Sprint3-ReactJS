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
        <CardEvento titulo="Iniciando React" texto="Breve descrição do evento, pode ser um paragrafo pequenoBreve descrição do evento,
       pode ser um paragrafo pequeno.Breve descrição do evento, pode ser um paragrafo pequeno." textoLink="Participar" />
        <CardEvento titulo="HTML CSS" texto="Breve descrição do evento, pode ser um paragrafo pequenoBreve descrição do evento,
       pode ser um paragrafo pequeno.Breve descrição do evento, pode ser um paragrafo pequeno." textoLink="Participar" />
        <CardEvento titulo="APi/JSON" texto="Breve descrição do evento, pode ser um paragrafo pequenoBreve descrição do evento,
       pode ser um paragrafo pequeno.Breve descrição do evento, pode ser um paragrafo pequeno." textoLink="Participar" />
        <CardEvento titulo="JavaScript" texto="Breve descrição do evento, pode ser um paragrafo pequenoBreve descrição do evento,
       pode ser um paragrafo pequeno.Breve descrição do evento, pode ser um paragrafo pequeno." textoLink="Participar" />
        <CardEvento titulo="SqlServer" texto="Breve descrição do evento, pode ser um paragrafo pequenoBreve descrição do evento,
       pode ser um paragrafo pequeno.Breve descrição do evento, pode ser um paragrafo pequeno." textoLink="Participar" />
      </Container>
    </div>
  );
}

export default App;
