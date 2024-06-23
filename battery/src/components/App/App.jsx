import './App.css';

import Header from '../Header/Header';
import Battery from '../Battery/Battery';
import About from '../About/About';

function App() {

  return (
    <div className="page">
      {/* <Header /> */}
      <main className="main">
        <h1 className="main__title">Батарейка Тонкипера</h1>
        <About />
      </main>
    </div>
  );
}

export default App;
