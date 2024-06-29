import './App.css';
import "../Button/Button.css";

import CardsContainer from '../CardsContainer/CardsContainer';
import CardPopup from '../CardPopup/CardPopup';

import { useState, useEffect } from 'react';

function App() {
  const cardsArr=[
    {
      id: 1,
      title: `Что такое Батарейка и для чего она нужна?`,
      description: [
        "Батарейка — это специальный сервис в Tonkeeper, который позволяет вам совершать операции в сети TON без необходимости иметь на балансе кошелька достаточное количество TON для оплаты сетевых комиссий.",
        "Батарейка используется для обмена токенов, перевода токенов и NFT, и измеряется в зарядах, которые покрывают сетевые расходы.",
        "Наша цель — сделать взаимодействие с криптовалютой простым и удобным, позволяя вам легко и спокойно обменивать и передавать активы.",
      ],
      animationClassName: "battery_animation_gradient",
    },
    {
      id: 2,
      title: "Как использовать Батарейку?",
      description: [
        "Батарейку можно использовать для обмена токенов в паре 'токен + токен' или 'токен + тон', а также для перевода токенов и NFT.",
        "Батарейка измеряется в зарядах, которые покрывают сетевые расходы. Например, для обмена токенов может потребоваться ~ 50 зарядов, для перевода токенов ~ 10 зарядов, а для перевода NFT ~ 4 заряда.",
        "Батарейка автоматически используется при совершении операций в сети TON, и вы можете проверить текущее количество зарядов на вашей Батарейке в приложении Tonkeeper."
      ],
      animationClassName: "battery_animation_pulse battery_animation_gradient",
    },
    {
      id: 3,
      title: "Как пополнить Батарейку?",
      description: [
        "Батарейку можно пополнить, отправив USDt, jUSDT или NOT на домен battery.ton или купить в Tonkeeper на iOS версии через AppStore.",
        "Чтобы сделать это нажмите на иконку Батарейки на главном экране кошелька и выберите удобный для вас способ пополнения :)",
        "Минимальные лимиты для Батарейки: 300 NOT или 3 USDt.",
      ],
      animationClassName: "battery_animation_fill", 
    },
    {
      id: 4,
      title: "Возврат средств за Батарейку",
      description: [
        "Tonkeeper предоставляет возможность запросить возврат средств за покупку Батарейки в течение первых 14 дней.",
        "Для этого нужно кликнуть на иконку Батарейки на главном экране рядом с балансом кошелька, а затем перейти по кнопке 'Запросить возврат' внизу.",
        "Tonkeeper не возвращает криптовалюту за покупку автоматически. Все запросы на возврат должны быть инициированы пользователем в течение заданного периода времени.",
        "В случае покупки Батарейки через AppStore процесс рефанда также происходит на стороне AppStore. Apple вернет средства за вашу покупку.",
      ],
      animationClassName: "battery_animation_fade",
    },
  ]
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closePopup();
      }
    }
    if(isCardPopupOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isCardPopupOpen]); 

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardPopupOpen(!isCardPopupOpen);
  } 

  function closePopup() {
    setIsCardPopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page_gradient_left page_gradient_side"></div>
      <div className="page_gradient_right page_gradient_side"></div>
      <main className="main">
        <div className="main__title-container">
          <h1 className="main__title">Батарейка Тонкипера</h1>
          <a className="main__link main__link_tonkeeper" href="https://tonkeeper.com/" target='_blank' rel="noreferrer">
            <svg className="main__logo" xmlns="http://www.w3.org/2000/svg" width="60" height="59" fill="none" viewBox="0 0 97 96"><path fill="#45AEF5" d="M48.5 45.333 91.167 26 48.5 93.333z" opacity="0.75"></path><path fill="#45AEF5" d="M48.5 45.333 5.833 26 48.5 93.333z" opacity="0.5"></path><path fill="#45AEF5" d="M48.5 45.333 5.833 26 48.5 6.667 91.167 26z"></path></svg>
          </a>
        </div>
        <CardsContainer cardsArr={cardsArr} cardOnClick={handleCardClick} />
      </main>
      <CardPopup card={selectedCard} isOpen={isCardPopupOpen} onClose={closePopup}/>
    </div>
  );
}

export default App;
