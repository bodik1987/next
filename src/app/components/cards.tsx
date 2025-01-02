"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  { id: 1, name: "Card 1" },
  { id: 2, name: "Card 2" },
  { id: 3, name: "Card 3" },
  //   { id: 4, name: "Card 4" },
  //   { id: 5, name: "Card 5" },
  //   { id: 6, name: "Card 6" },
  //   { id: 7, name: "Card 7" },
  //   { id: 8, name: "Card 8" },
];

export default function Cards() {
  const [click, setClick] = useState(false);

  const getolor = (i: number) => {
    switch (i) {
      case 1:
        return "#A1A8B2";
      case 2:
        return "#888F9E";
      default:
        return "#C5C8CF";
    }
  };

  const animation = {
    initial: (i: number) => ({
      y: click ? i * 120 : i * 14,
      scale: i === 0 ? 1 : 1 - 0.05 * i,
      backgroundColor: click ? "#C5C8CF" : i === 0 ? "#C5C8CF" : getolor(i),
    }),
    enter: (i: number) => ({
      y: click ? i * 120 : i * 14,
      scale: click ? 1 : i === 0 ? 1 : 1 - 0.05 * i,
      backgroundColor: click ? "#C5C8CF" : i === 0 ? "#C5C8CF" : getolor(i),
      transition: {
        duration: 0.5,
        // delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <>
      <button
        onClick={() => {
          setClick(!click);
        }}
      >
        Click
      </button>
      <div className="p-4 relative">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            custom={i}
            variants={animation}
            initial="initial"
            animate="enter"
            style={{ zIndex: -i }}
            className={`absolute left-4 right-4 p-10 rounded-[30px] bg-red-500 text-[#81848B] text-3xl`}
          >
            {card.name}
          </motion.div>
        ))}
      </div>
    </>
  );
}
