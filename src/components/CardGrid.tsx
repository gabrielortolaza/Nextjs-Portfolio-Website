import { useState } from "react";
import Modal from "./Modal";
import { CardData } from "../types";  

const cardData: CardData[] = [
  {
    id: 1,
    title: "Beautiful Mountain",
    description: "A scenic view of a mountain range.",
    images: [
      "/images/mountain1.jpg",
      "/images/mountain2.jpg",
      "/images/mountain3.jpg",
    ],
  },
  {
    id: 2,
    title: "Serene Beach",
    description: "A peaceful sunset at the beach.",
    images: [
      "/images/beach1.jpg",
      "/images/beach2.jpg",
      "/images/beach3.jpg",
    ],
  },
  {
    id: 3,
    title: "City Lights",
    description: "A bustling city at night with bright lights.",
    images: [
      "/images/city1.jpg",
      "/images/city2.jpg",
      "/images/city3.jpg",
    ],
  },
];

export default function CardGrid() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <div className="container">
      <h1>Image Cards</h1>
      <div className="card-grid">
        {cardData.map((card) => (
          <div key={card.id} className="card" onClick={() => setSelectedCard(card)}>
            <img src={card.images[0]} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      {selectedCard && (
        <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        .card {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .card img {
          width: 100%;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
