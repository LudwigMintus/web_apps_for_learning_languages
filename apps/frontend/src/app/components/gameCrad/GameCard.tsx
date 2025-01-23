// GameCard.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemoryTest from "./MemoryTest";
import BackgroundShapes from "../catalogPage/backgroundShapes/BackgroundShapes";
import Header from "../catalogPage/header/Header";
import { getCards } from "../../api/apiService";

const GameCard = () => {
  const { catalogId, cardId } = useParams<{ catalogId: string; cardId: string }>();
  const [cards, setCards] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialIndex, setInitialIndex] = useState(0);

  useEffect(() => {
    if (catalogId) {
      getCards() // Используем API функцию для получения карточек
        .then((data) => {
          const filteredCards = data.filter((card) => card.catalogId === catalogId);
          setCards(filteredCards);

          const startIndex = filteredCards.findIndex((card) => card.id === cardId);
          setInitialIndex(startIndex !== -1 ? startIndex : 0);
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
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
