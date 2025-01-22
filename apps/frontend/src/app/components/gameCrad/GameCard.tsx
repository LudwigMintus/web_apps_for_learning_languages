import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemoryTest from "./MemoryTest";
import BackgroundShapes from "../catalogPage/backgroundShapes/BackgroundShapes";
import Header from "../catalogPage/header/Header";

const GameCard = () => {
  const { catalogId, cardId } = useParams(); // Получение параметров из маршрута
  const [cards, setCards] = useState([]); // Массив карточек
  const [error, setError] = useState(null); // Состояние ошибки
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [initialIndex, setInitialIndex] = useState(0); // Индекс начальной карточки

  useEffect(() => {
    if (catalogId) {
      fetch(`/api/catalogs/${catalogId}/cards`)
        .then((response) => {
          if (!response.ok) throw new Error("Ошибка загрузки карточек");
          return response.json();
        })
        .then((data) => {
          setCards(data);

          // Устанавливаем начальный индекс на основе cardId
          const startIndex = data.findIndex((card) => card.id === cardId);
          setInitialIndex(startIndex !== -1 ? startIndex : 0);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      setError("Отсутствует параметр каталога");
      setLoading(false);
    }
  }, [catalogId, cardId]);

  if (loading) return <p>Загрузка карточек...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <BackgroundShapes />
      <Header />
      <MemoryTest cards={cards} initialIndex={initialIndex} />
    </div>
  );
};

export default GameCard;
