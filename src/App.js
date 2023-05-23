import React from "react"
import "./css/secRepos.css";
import Headers from './components/Headers';
import PageFooter from './components/Pagefooter'
import Pagesection from "./components/Pagesection";
import Repositorios from "./Repositorios"
import Carrusel from "./components/Carrusel"

function App() {
  return(
    <section>
      <Headers>Headers</Headers>
     {/* */}
      <Pagesection></Pagesection>
      {/*<Carrusel>Carrusel</Carrusel>*/}
      <main className='Repo2'>
      <Repositorios>App</Repositorios>
      </main>
      <PageFooter />
    </section>
  );
}
export default App