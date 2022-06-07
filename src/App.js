import "../src/Styles/style.css";
import { Contact } from "./components/Contact";
import { Habilidades } from "./components/Habilidades";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Proyects } from "./components/Proyects";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Habilidades />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
