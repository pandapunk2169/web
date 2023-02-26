import React from 'react'
import './mainSeven750.scss'
import { bigHeroLists } from '@pages/common/base-mock.jsx'

export default function mainSeven() {
  return (
    <main className='main-seven'>
      <div className='main-bg-wrap app-hidden'>
        <img
          className='big-main-bg first'
          src='/imgs/pc/main-bg7.1.png'
        />
        <img className='big-main-bg' src='/imgs/pc/main-bg7.2.png' />
        <img
          className='big-main-bg second'
          src='/imgs/pc/main-bg7.3.png'
        />
      </div>
      <div className='main-bg-wrap pc-hidden'>
        <img className='main-bg first' src='/imgs/app/main-bg7.1.png' />
        <img className='main-bg' src='/imgs/app/main-bg7.2.png' />
        <img className='main-bg' src='/imgs/app/main-bg7.3.png' />
        <img className='main-bg' src='/imgs/app/main-bg7.4.png' />
        <img className='main-bg' src='/imgs/app/main-bg7.5.png' />
        <img className='main-bg' src='/imgs/app/main-bg7.6.png' />
        <img className='main-bg second' src='/imgs/app/main-bg7.7.png' />
      </div>
      <div className='main-wrap'>
        <div id='heros' className='main-title'>
          OUR HEROS
        </div>
        <div className='main-sub-title'>PALADIN & KNIGHTS TEAM</div>
        <ul className='hero-wrap'>
          {bigHeroLists.map((item, idx) => (
            <li className='hero-item'>
              <img
                className='hero-img'
                src={`/imgs/pc/hero${idx + 1}.png`}
              ></img>
              <div className='title'>{item.title}</div>
              <div className='sub-title'>{item.subTitle}</div>
              <p className='desc'>{item.desc}</p>
            </li>
          ))}
        </ul>
        <div id='faq' className='ask-wrap'>
          <div className='ask-title'>FREQUENTLY ASKED QUESTIONS</div>
          <p className='ask-sub-title'>PANDAREN FAITH ETERNITY</p>
          <div className='ask-third-title'>WHAT IS PANDAPUNK 2169 ?</div>
          <div className='ask-desc'>
            Pandapunk 2169 is a community driven Web3 Gamefi & Metaverse
            project. Using NFT as the brand value, PPP and PPT as the token
            economic model to build a brand new Pandaren Ecosystem.
          </div>
          <div className='ask-third-title'>
            HOW MANY TOTAL NFTs & CHARACTERS ?
          </div>
          <div className='ask-third-title'>
            ARE THE DIFFERENT LEVELS OF NFTS ?
          </div>
          <div className='ask-third-title'>
            HOW TO GET THE PANDAPUNK 2169 NFTS ?
          </div>
          <div className='ask-third-title'>
            WILL THERE REALLY BE A PANDAPUNK 2169 METAVERSE ?
          </div>
          <img
            className='ask-green-third-title'
            src='/imgs/pc/greentext.png'
          />
        </div>
      </div>
    </main>
  )
}
