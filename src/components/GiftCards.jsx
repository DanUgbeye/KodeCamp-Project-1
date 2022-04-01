import React, { useState } from 'react';
import allGiftCards from "../data/data";
import { v1 as uuid } from 'uuid';

const GiftCards = () => {

  const [ cards ] = useState(allGiftCards);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full px-12  gap-8 ">
      {
        cards.map((card) => (
          <div className=" mx-auto mb-4 w-full bg-[#E8D9F3] hover:bg-[#DEBEF4] rounded-md max-w-sm py-4 px-8 shadow-[0px_2px_15px_0px] hover:shadow-[0px_2px_25px_1px] hover:shadow-black/30 shadow-black/25 transition-all ease-linear duration-400 " key={card.id} >

            <div className=" text-2xl font-semibold text-[#76568A]  ">{card.title}</div>

            <div className=" py-4 text-[#8D6F95] ">

              <div className=" mb-2 font-semibold text-lg ">Accepted Currencies: </div>

              <div id="currencies" className=" gap-4 grid grid-cols-4 ">
                {card.currencies.map((currency) => (
                  <div className=" border-b border-solid border-[#8D6F95] w-fit p-1 text-center " key={uuid()} >{currency.toUpperCase()}</div>
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