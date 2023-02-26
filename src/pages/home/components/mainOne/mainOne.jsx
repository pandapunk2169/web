import React from 'react'
import './mainOne750.scss'
export default function mainOne() {
  return (
    <main className='main-one' id='about'>
      <img className='big-main-bg' src='/imgs/pc/main-bg.png' />
      <img className='main-bg' src='/imgs/app/main-bg.png' />
      <div className='main-wrap'>
        <div className='title-wrap'>
          <img
            className='main-logo'
            src='/imgs/pc/logo-big.png'
            alt='logo'
          />
          <p className='main-title'>
            PANDAPUNK 2169
            <br className='pc-hidden' />
            MINT YOUR HEROS
          </p>
          <p className='main-sub-title'>TOTAL SUPPLY PANDARENs: 10,000 NFTs</p>
          <div className='main-th-title-wrap'>
            <p className='main-th-title'>
              CONTRACT ADDRESS : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>
            <img className='copy' src='/imgs/pc/copy.png' />
            {/* src='/imgs/pc/copy.png' */}
          </div>
        </div>
        <ul className='time-wrap'>
          <li>
            <p className='title'>WHITELIST</p>
            <p className='coin'>0.025 ETH PER WALLET</p>
            <div className='time-item'>
              <ul className='left'>
                <li className='left-li'>June</li>
                <li className='left-li'>01</li>
                <li className='left-li'>2023</li>
              </ul>
              <ul className='right'>
                <li className='left-li'>10</li>:<li className='left-li'>10</li>:
                <li className='left-li'>01</li>
              </ul>
            </div>
          </li>
          <li>
            <p className='title'>PUBLIC</p>
            <p className='coin'>0.03 ETH PER WALLET</p>
            <div className='time-item'>
              <ul className='left'>
                <li className='left-li'>June</li>
                <li className='left-li'>01</li>
                <li className='left-li'>2023</li>
              </ul>
              <ul className='right'>
                <li className='left-li'>10</li>:<li className='left-li'>10</li>:
                <li className='left-li'>01</li>
              </ul>
            </div>
          </li>
        </ul>
        <div className='board-wrap'>
          <div className='board'>
            <div className='top'>
              <div className='count-reg-wrap flex'>
                <div className='count-wrap flex'>
                  <div className='reduce'>-</div>
                  <div className='num'>10</div>
                  <div className='add'>+</div>
                </div>
                <p className='reg pc-hidden'>10 Max</p>
              </div>
                <p className='reg app-hidden'>10 Max</p>
                <p className='total flex app-hidden'>
                  TOTAL : <span className='green-num'>0.1</span>
                  ETH
                </p>
              <p className='total flex pc-hidden'>
                TOTAL : <span className='green-num'>0.1</span>
                ETH
              </p>
            </div>
            <div className='bottom'>
              <p className='opt flex'>
                OPPORTUNITY :<span className='green-t'>X</span>
                Legendary &<span className='green-t'>X</span>
                Holy
              </p>

              <p className='awa flex'>
                AWARDS :<span className='green-t'>XXXX</span> PPT
              </p>
            </div>
          </div>
        </div>
        <img className='c-w-btn' src='/imgs/pc/connect-wallet.png' />
        <div className='end-text-desc'>
          PANDAREN MINTED:
          <span className='green-t'>10,000</span>/ 10,000
        </div>
      </div>
    </main>
  )
}
