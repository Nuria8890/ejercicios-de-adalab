import "../styles/App.scss";
import Tooltip from "./Tooltip";

function App() {
  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">Título de la página</h1>
      </header>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid
        magnam libero, debitis impedit necessitatibus commodi aut, consectetur
        ducimus facilis qui itaque provident saepe ipsum doloribus culpa
        repudiandae alias deserunt.
      </p>
      <Tooltip>
        <h4>Este es el título de la ayuda</h4>
        <p>Y esta es la descripción de la ayuda.</p>
      </Tooltip>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
        temporibus dolore magni impedit, velit unde quam culpa ipsum excepturi
        ipsa rerum asperiores enim voluptatibus accusamus neque dolorum vitae
        porro earum!
      </p>
      <Tooltip>
        <p>Esta ayuda no tiene título, solo descripción.</p>
      </Tooltip>
    </>
  );
}

export default App;
