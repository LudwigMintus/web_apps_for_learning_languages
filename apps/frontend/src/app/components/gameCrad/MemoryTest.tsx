import React, { useEffect, useState } from "react";
import "./css/memoryTest.css";

const MemoryTest = ({ cards, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // Индекс текущей карточки
  const [isFlipped, setIsFlipped] = useState(false); // Состояние для переворота карточки
  const [actionTaken, setActionTaken] = useState(null); // Состояние "улёта" карточки

  const handleFlip = () => {
    setIsFlipped(!isFlipped); // Переключение состояния переворота
  };

  const handleAction = (action) => {
    setActionTaken(action); // Устанавливаем направление "улёта"
    setTimeout(() => {
      console.log(
        action === "know"
          ? `Карточка "${cards[currentIndex].title}" изучена`
          : `Карточка "${cards[currentIndex].title}" пропущена`
      );

      // Переходим к следующей карточке
      setIsFlipped(false); // Сбрасываем переворот
      setActionTaken(null); // Сбрасываем действие
      setCurrentIndex((prevIndex) => prevIndex + 1); // Следующая карточка
    }, 500); // Задержка для анимации
  };

  if (currentIndex >= cards.length) return <p>Вы изучили все карточки!</p>; // Конец карточек

  const currentCard = cards[currentIndex]; // Текущая карточка

  return (
    <div className="memory-test-container">
      {/* Левый и правый блоки для перемещения карточек */}
      <div
        className={`memory-test-card memory-test-card-left ${
          actionTaken === "dontKnow" ? "moved-card" : ""
        }`}
      >
        {actionTaken === "dontKnow" && <p>Не знаю</p>}
      </div>
      <div
        className={`memory-test-card memory-test-card-center ${
          isFlipped ? "flipped" : ""
        } ${actionTaken ? "moved" : ""}`}
        onClick={handleFlip} // Обработчик переворота карточки
      >
        {!isFlipped ? (
          <>
            <img
              src={currentCard.imageUrl}
              alt={currentCard.title}
              className="memory-test-image"
            />
            <p>{currentCard.description}</p>
          </>
        ) : (
          <p>{currentCard.backText || "Текст на обратной стороне"}</p> // Текст на обратной стороне
        )}
      </div>
      <div
        className={`memory-test-card memory-test-card-right ${
          actionTaken === "know" ? "moved-card" : ""
        }`}
      >
        {actionTaken === "know" && <p>Знаю</p>}
      </div>
      {/* Кнопки для управления */}
      <div className="memory-test-button-container">
        <button
          className="memory-test-button"
          onClick={() => handleAction("dontKnow")}
          disabled={!!actionTaken} // Блокируем кнопки после действия
        >
          Не знаю
        </button>
        <button
          className="memory-test-button"
          onClick={() => handleAction("know")}
          disabled={!!actionTaken} // Блокируем кнопки после действия
        >
          Знаю
        </button>
      </div>
    </div>
  );
};

export default MemoryTest;
