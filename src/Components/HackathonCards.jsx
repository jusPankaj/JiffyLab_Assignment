import React from "react";
import COIN_ICON from "../assets/coin.png";
import TROPHY_ICON from "../assets/trophy.png";

const keywordColors = {
  Content: "bg-[#EFF6F8] text-[#5EA8C4]",
  Design: "bg-[#F2EDFF] text-[#8948F2]",
  Frontend: "bg-[#EBF3FF] text-[#3EA7FF]",
  Backend: "bg-[#FFF2EB] text-[#FF8370]",
  Blockchain: "bg-[#FFEBF9] text-[#FF3EC9]",
};

const HackathonCards = ({ imageSrc, title, byName, coins, rank, keyword }) => {
  return (
    <div className="flex items-center w-[1080px] h-[116px] hover:bg-[#EDF2F7] m-5">
      <div className="p-4">
        <img src={imageSrc} className="w-20 h-20 rounded-md" />
      </div>
      <div className="flex flex-col flex-1 p-4 ">
        <h1 className="font-semibold mb-2">
          {title}{" "}
          <span className="text-[#94A3B8]">
            {" "}
            <span className="text-sm font-normal">by</span> {byName}
          </span>
        </h1>

        <div className="content flex">
          {coins && (
            <div className="content-coin flex gap-2">
              <img src={COIN_ICON} className="h-[24px] w-[24px]" />
              <p className="content-coin-text ">
                {coins} <span className="text-slate-400">USDC |</span>{" "}
                &nbsp;&nbsp;
              </p>
            </div>
          )}
          {rank && (
            <div className="content-rank flex items-center gap-1">
              <img src={TROPHY_ICON} className="w-[13.71px] h-[13.71px]" />
              <p className="text-slate-600">&nbsp; &nbsp;{rank} Place</p>
            </div>
          )}
          {keyword && (
            <div className="content-keyword">
              {keyword.map((keyword, index) => (
                <span
                  key={index}
                  className={`keyword border border-none  h-6 w-screen rounded-md p-1.5 mx-2 ${keywordColors[keyword]}`}
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col p-4 mr-5 items-end">
        <p className="text-[#64758B]">21/03/2023</p>
        <p className="py-2">
          12 <span className="text-[#64758B]">Participants</span>
        </p>
      </div>
    </div>
  );
};

export default HackathonCards;
