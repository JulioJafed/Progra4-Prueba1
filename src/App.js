import logo from './logo.svg';
import './App.css';
import Headers from './components/Headers';
import PageFooter from './components/Pagefooter';
import Pagesection from'./components/Pagesection';

function App() {
  return (
    <div >
      <Headers>PaHeaders</Headers>

      <Pagesection>Pagesection</Pagesection>
      <PageFooter>PageFooter</PageFooter>

    </div>
  );
}

export default App;
