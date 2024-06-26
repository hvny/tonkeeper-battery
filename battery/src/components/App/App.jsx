import './App.css';

import Header from '../Header/Header';
import About from '../About/About';
import CardsContainer from '../CardsContainer/CardsContainer';
import CardPopup from '../CardPopup/CardPopup';

import { useState } from 'react';

function App() {
  const cardsArr=[
    {
      id: 1,
      title: `Что такое Батарейка и для чего она нужна?`,
      description: [
        "Батарейка - это небольшой офчейн-аккаунт в Tonkeeper, который позволяет оплачивать сетевые расходы без необходимости иметь TON на балансе кошелька.",
        "Батарейка используется для обмена токенов, перевода токенов и NFT.",
        "Батарейка измеряется в зарядах, которые покрывают сетевые расходы.",
        "Наша цель — сделать взаимодействие с криптовалютой простым и удобным, позволяя вам легко и спокойно обменивать и передавать активы.",
      ],
      animationClassName: "battery_animation_gradient",
    },
    {
      id: 2,
      title: "Как использовать Батарейку?",
      description: [
        "Батарейку можно использовать для обмена токенов в паре 'токен + токен' или 'токен + тон', перевода токенов и NFT.",
        "Батарейка измеряется в зарядах, которые покрывают те самые сетевые расходы. Например, для обмена токенов может потребоваться ~ 50 зарядов, для перевода токенов ~ 10 зарядов, а для перевода NFT ~ 4 заряда.",
        "Батарейка позволяет сделать взаимодействие с криптовалютой простым и удобным.",
      ],
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

  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardPopupOpen(!isCardPopupOpen);
  } 

  function closePopup() {
    setIsCardPopupOpen(false);
  }

  return (
    <div className="page">
      {/* <Header /> */}
      <main className="main">
        <h1 className="main__title">Батарейка Тонкипера</h1>
        <CardsContainer cardsArr={cardsArr} cardOnClick={handleCardClick} />
        {/* <Battery /> */}
      </main>

      <CardPopup card={selectedCard} isOpen={isCardPopupOpen} onCLose={closePopup}/>
    </div>
  );
}

export default App;
