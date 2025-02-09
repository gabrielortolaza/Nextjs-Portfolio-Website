import { useState } from "react";
import { CardData } from "../types";

interface ModalProps {
  card: CardData;
  onClose: () => void;
}

export default function Modal({ card, onClose }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <div className="slider">
          <button onClick={prevImage}>❮</button>
          <img src={card.images[currentIndex]} alt={card.title} />
          <button onClick={nextImage}>❯</button>
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }
        .slider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        }
        .slider img {
          width: 300px;
          height: auto;
          border-radius: 10px;
        }
        .slider button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
