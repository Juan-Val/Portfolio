import '../src/Styles/style.css';
import { Habilidades } from './components/Habilidades';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Habilidades/>
      
    </div>
  );
}

export default App;
