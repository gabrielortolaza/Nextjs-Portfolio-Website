import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { CardData } from "../types";  

import subflow_1 from "../../public/img/projects/subflow_1.png";
import subflow_2 from "../../public/img/projects/subflow_2.png";
import subflow_3 from "../../public/img/projects/subflow_3.png";
import giftly_1 from "../../public/img/projects/giftly_1.png";
import giftly_2 from "../../public/img/projects/giftly_2.png";
import giftly_3 from "../../public/img/projects/giftly_3.png";
import guycarp_1 from "../../public/img/projects/guycarp_1.png";
import guycarp_2 from "../../public/img/projects/guycarp_2.png";
import guycarp_3 from "../../public/img/projects/guycarp_3.png";

const cardData: CardData[] = [
  {
    id: 1,
    title: "Senior React Developer",
    description: "Worked on the UI face lifting for the dashboard using React, Next.js, and Material Design. And contributed to the company's product improvement efforts by adding new features and implementing architectures. And fixed bugs and tracked tickets using the Trello board.",
    images: [
      subflow_1,
			subflow_2,
			subflow_3,
    ],
  },
  {
    id: 2,
    title: "Senior Vue.js / Ruby Developer",
    description: "Programmed functional reusable components with a Vue.js 3.0 wired to a Ruby backend. And styled the front-end using windicss , a next generation utility-first CSS framework. And developed Giftly's Consumer/greeting card selection modal so users can build their own gifts(select,drag,drop,preview,checkout). And analyzed and suggested how designs could be reused for additional features to keep the engineering cost down some.",
    images: [
      giftly_1,
			giftly_2,
			giftly_3,
    ],
  },
  {
    id: 3,
    title: "Senior React Developer",
    description: "Analyzing customer needs and designed a technical solution. And designed a layout of the application and conducted UI/UX research with-in the corporate environment. And coding, testing, implementing commits, builds, and updates in React JS environment. And developing and maintaining Git repository while establishing a great collaboration among the crossfunctional development team. And dividing the task into small parts and engaging with the entire development team.",
    images: [
      guycarp_1,
			guycarp_2,
			guycarp_3,
    ],
  },
];

export default function CardGrid() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <div className="container">
      <div className="card-grid">
        {cardData.map((card) => (
          <div key={card.id} className="card" onClick={() => setSelectedCard(card)}>
            <Image src={card.images[0]} alt={card.title} />
            <h3>{card.title}</h3>
            {/* <p>{card.description}</p> */}
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
          margin-top: 0px;
        }
        .card {
          border: 1px solid #ddd;
          background: #ddd;
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
				.card h3 {
					margin: 15px;
          font-weight: bold;
				}
      `}</style>
    </div>
  );
}
