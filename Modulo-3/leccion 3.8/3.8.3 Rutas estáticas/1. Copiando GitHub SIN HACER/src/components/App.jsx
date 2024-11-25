import "../styles/App.scss";
import { Link, Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import Repositories from "./Repositories";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
function App() {
  return (
    <>
      <header>
        <h1>Replicando GitHub</h1>
      </header>

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/repositories">Repositories</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
