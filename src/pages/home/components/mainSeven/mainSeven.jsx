import React, { useEffect, useState } from "react";
import "./mainSeven750.scss";
import { bigHeroLists } from "@pages/common/base-mock.jsx";

export default function mainSeven() {
  const [fristAnswerStatus, setFristAnswerStatus] = useState(true);
  const [secondAnswerStatus, setSecondAnswerStatus] = useState(false);
  const [thridAnswerStatus, setThridAnswerStatus] = useState(false);
  const [fourchAnswerStatus, setFourchAnswerStatus] = useState(false);
  const [fiveAnswerStatus, setFiveAnswerStatus] = useState(false);

  const [faqList, setFaqLists] = useState([
    {
      title: "WHAT IS PANDAPUNK 2169 ?",
      desc: "Pandapunk 2169 is a community driven Web3 Gamefi & Metaverse project. Using NFT as the brand value, PPP and PPT as the token economic model to build a brand new Pandaren Ecosystem.",
      status: true,
    },
    {
      title: "HOW MANY TOTAL NFTs & CHARACTERS ?",
      desc: "10,000 Padaren heros will be minted for the first time.It’s including 100 different Pandaren characters.",
      status: false,
    },
    {
      title: "ARE THE DIFFERENT LEVELS OF NFTS ?",
      desc: "Right.Total 4 different levels representing of the Pandaren hierarchy.They have different shapes,weapons,clothing etc..",
      status: false,
    },
    {
      title: "HOW TO GET THE PANDAPUNK 2169 NFTS ?",
      desc: "NFT will be minted on Ethereum, you need to hold a certain amount of ETH in your wallet for mint and transfer gas fee. In the process of Mint, there is an opportunity to obtain additional PPP or PPT rewards.",
      status: false,
    },
    {
      title: "WILL THERE REALLY BE A PANDAREN METVERSE ?",
      desc: `Yes.Please trust the Pandaren's Honor. Join and contribute your strength.`,
      status: false,
    },
  ]);
  return (
    <main className="main-seven">
      <div className="main-bg-wrap app-hidden">
        <img className="big-main-bg first" src="/imgs/pc/main-bg7.1.png" />
        <img className="big-main-bg" src="/imgs/pc/main-bg7.2.png" />
        <img className="big-main-bg second" src="/imgs/pc/main-bg7.3.png" />
      </div>
      <div className="main-bg-wrap pc-hidden">
        <img className="main-bg first" src="/imgs/app/main-bg7.1.png" />
        <img className="main-bg" src="/imgs/app/main-bg7.2.png" />
        <img className="main-bg" src="/imgs/app/main-bg7.3.png" />
        <img className="main-bg" src="/imgs/app/main-bg7.4.png" />
        <img className="main-bg" src="/imgs/app/main-bg7.5.png" />
        <img className="main-bg" src="/imgs/app/main-bg7.6.png" />
        <img className="main-bg second" src="/imgs/app/main-bg7.7.png" />
      </div>
      <div className="main-wrap">
        <div id="heros" className="main-title">
          OUR HEROS
        </div>
        <div className="main-sub-title">PALADIN & KNIGHTS TEAM</div>
        <ul className="hero-wrap">
          {bigHeroLists.map((item, idx) => (
            <li className="hero-item">
              <img
                className="hero-img"
                src={`/imgs/pc/hero${idx + 1}.png`}
              ></img>
              <div className="title">{item.title}</div>
              <div className="sub-title">{item.subTitle}</div>
              <p className="desc">{item.desc}</p>
            </li>
          ))}
        </ul>
        <div id="faq" className="ask-wrap">
          <div className="ask-title">FREQUENTLY ASKED QUESTIONS</div>
          <p className="ask-sub-title">PANDAREN FAITH ETERNITY</p>

          {faqList.map((item, idx) => (
            <>
              <div
                className="ask-third-title"
                onClick={() => {
                  // 当前item改为true，其他item改为false
                  const list = faqList.map((item) => {
                    return {
                      ...item,
                      status: false,
                    };
                  });
                  list[idx].status = true;
                  setFaqLists(list);
                }}
              >
                {item.title}
              </div>
              {item.status && <div className="ask-desc">{item.desc}</div>}
            </>
          ))}
          <img className="ask-green-third-title" src="/imgs/pc/greentext.png" />
        </div>
      </div>
    </main>
  );
}
