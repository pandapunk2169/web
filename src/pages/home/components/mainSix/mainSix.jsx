import React from 'react'
import './mainSix750.scss'
import { heroLists } from '@pages/common/base-mock'
import HeroLists from '../heroLists/heroLists'
export default function mainSix() {
  return (
    <main className='main-six'>
      <div className='main-bg-wrap app-hidden'>
        <img className='big-main-bg' src='/imgs/pc/main-bg6.png' />
        <img className='big-main-bg' src='/imgs/pc/main-bg6.2.png' />
      </div>

      <div className='main-bg-wrap pc-hidden'>
        <img className='main-bg first' src='/imgs/app/main-bg6.1.png' />
        <img className='main-bg' src='/imgs/app/main-bg6.2.png' />
        <img className='main-bg' src='/imgs/app/main-bg6.3.png' />
      </div>
      <div className='main-wrap '>
        <div id='ecosystem' className='title'>
          ECOSYSTEM
        </div>
        <p className='desc'>HERO NFTS</p>
        <HeroLists></HeroLists>
        <ul className='hero-lists pc-hidden'>
          <li className='one-items'>
            <div className='items-title'>{heroLists[0].name}</div>
            <ul className='img-wrap grid grid-cols-4 gap-5'>
              {heroLists[0].imgLists.map((s, si) => (
                <li className='img-item' key={s}>
                  <img
                    className='img'
                    src={`/imgs/heros/${heroLists[0].imgBaseUrl}${
                      si + 1
                    }.png`}
                  />
                  <p className='img-name'>{s}</p>
                </li>
              ))}
            </ul>
          </li>
          <div className='grid grid-cols-2 gap-6px'>
            <li className='two-items'>
              <div className='items-title'>{heroLists[1].name}</div>
              <ul className='img-wrap grid grid-cols-2'>
                {heroLists[1].imgLists.map((s, si) => (
                  <li className='img-item' key={s}>
                    <img
                      className='img'
                      src={`/imgs/heros/${heroLists[1].imgBaseUrl}${
                        si + 1
                      }.png`}
                    />
                    <p className='img-name'>{s}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li className='two-items'>
              <div className='items-title'>{heroLists[2].name}</div>
              <ul className='img-wrap grid grid-cols-2'>
                {heroLists[2].imgLists.map((s, si) => (
                  <li className='img-item' key={s}>
                    <img
                      className='img'
                      src={`/imgs/heros/${heroLists[2].imgBaseUrl}${
                        si + 1
                      }.png`}
                    />
                    <p className='img-name'>{s}</p>
                  </li>
                ))}
              </ul>
            </li>
          </div>

          <li className='four-items'>
            <div className='items-title'>{heroLists[3].name}</div>
            <ul className='img-wrap grid grid-cols-4 gap-5'>
              {heroLists[3].imgLists.map((s, si) => (
                <li className='img-item' key={s}>
                  <img
                    className='img'
                    src={`/imgs/heros/${heroLists[3].imgBaseUrl}${
                      si + 1
                    }.png`}
                  />
                  <p className='img-name'>{s}</p>
                </li>
              ))}
            </ul>
          </li>

          <li className='three-items'>
            <div className='items-title'>{heroLists[4].name}</div>
            <ul className='img-wrap grid grid-cols-3 gap-40px gap-y-5'>
              {heroLists[4].imgLists.map((s, si) => (
                <li className='img-item' key={s}>
                  <img
                    className='img'
                    src={`/imgs/heros/${heroLists[4].imgBaseUrl}${
                      si + 1
                    }.png`}
                  />
                  <p className='img-name'>{s}</p>
                </li>
              ))}
            </ul>
          </li>

          <li className='three-items'>
            <div className='items-title'>{heroLists[5].name}</div>
            <ul className='img-wrap grid grid-cols-3 gap-40px gap-y-5'>
              {heroLists[5].imgLists.map((s, si) => (
                <li className='img-item' key={s}>
                  <img
                    className='img'
                    src={`/imgs/heros/${heroLists[5].imgBaseUrl}${
                      si + 1
                    }.png`}
                  />
                  <p className='img-name'>{s}</p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className='ind-lists'>
          <li>
            <div className='ind-lists-title flex'>
              <img className='icon' src='' alt='' />
              <div className='right'>
                <div>WHAT IS PPP ?</div>
                <p>PANDA PUNK PALLADIUM</p>
              </div>
            </div>
            <div className='ind-lists-desc'>
              Palladium ore , the main mineral resource driving panda punk
              civilization. Mechanics masters made a leap in technology by
              refining and processing palladium. Palladium ore is very expensive
              and rare.PPP can use to buy the land building and weapons of
              PandaPunk 2169 Metaverse.
            </div>
          </li>
          <li>
            <div className='ind-liststitle flex'>
              <img className='icon' src='' alt='' />
              <div className='right'>
                <div>WHAT IS PPP ?</div>
                <p>PANDA PUNK PALLADIUM</p>
              </div>
            </div>
            <div className='ind-lists-desc'>
              Panda Punk Token , PPT will be used as the main circulation
              certificate in the Panda Punk Universe. Pandarens can be exchanged
              PPT in exchanges, and can also be rewarded by holding NFT and PPP.
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}
