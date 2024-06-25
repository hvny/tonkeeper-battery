import './App.css';

import Header from '../Header/Header';
import Battery from '../Battery/Battery';
import About from '../About/About';
import CardsContainer from '../CardsContainer/CardsContainer';
function App() {

  const cardsArr=[
    {
      id: 1,
      title: `Что такое Батарейка и для чего она нужна?`,
      description: "test1test1",
      animationClassName: "battery_animation_gradient",
    },
    {
      id: 2,
      title: "Как использовать Батарейку?",
      description: "test1test1",
      animationClassName: "battery_animation_pulse battery_animation_gradient",

    },
    {
      id: 3,
      title: "Как пополнить Батарейку?",
      description: "test1test1",
      animationClassName: "battery_animation_fill",
    },
    {
      id: 4,
      title: "Возврат средств за Батарейку",
      description: "test1test1",
      animationClassName: "battery_animation_fade",
    },
  ]

  return (
    <div className="page">
      {/* <Header /> */}
      <main className="main">
        <h1 className="main__title">Батарейка Тонкипера</h1>
        <CardsContainer cardsArr={cardsArr} />
        {/* <Battery /> */}
      </main>
    </div>
  );
}

export default App;
