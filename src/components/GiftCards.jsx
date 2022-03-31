import React, { useState } from 'react';
import allGiftCards from "../data/data";
import { v1 as uuid } from 'uuid';

const GiftCards = () => {

  const [ cards ] = useState(allGiftCards);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 px-12 text-green-800 gap-4 ">
      {
        cards.map((card) => (
          <div className=" mb-4 min-w-0 bg-green-400 rounded-md max-w-sm py-4 px-8 shadow-md shadow-black/50 " key={card.id} >

            <div className=" text-xl font-semibold text-green-800  ">{card.title}</div>

            <div className=" py-4 ">

              <div className=" mb-2 ">Accepted Currencies: </div>

              <div id="currencies" className=" gap-4 grid grid-cols-4 ">
                {card.currencies.map((currency) => (
                  <div className=" bg-green-500 shadow-md shadow-black/40 rounded-full p-1 text-center " key={uuid()} >{currency}</div>
                ))}
              </div>

            </div>

          </div>
        ))
      }
    </div>
  );
}

export default GiftCards;