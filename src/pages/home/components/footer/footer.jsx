import React from 'react'
import './footer750.scss'

export default function footer() {
  return (
    <footer className='footer'>
      <main>
        <img className='big-main-bg' src='/imgs/pc/footer.png' />
        <img className='main-bg' src='/imgs/app/footer.png' />

        <div className='main-wrap'>
          <img className='main-logo' src='/imgs/app/footer-logo.png' />
          <div className='app-icon-img-wrap app-hidden flex'>
            <div className='icon-lists flex'>
              <img
                className='icon-first'
                src='/imgs/pc/twitter.png'
                alt='twitter'
                onClick={() => {
                  location.href = "https://twitter.com/PandaPunk2169"
                }}
              />
              {/* <img src='/imgs/pc/game.png' alt='game' /> */}
            </div>
            <div className='page-footer'>
              2023 COPY RIGHT@PANDAPUNK 2169 . BRON FOR PANDARENS
            </div>
          </div>
          <div className='icon-lists pc-hidden flex'>
            <img
              className='icon-first'
              src='/imgs/pc/twitter.png'
              alt='twitter'
              onClick={() => {
                location.href = "https://twitter.com/PandaPunk2169"
              }}
            />
            {/* <img src='/imgs/pc/game.png' alt='game' /> */}
          </div>
          <div className='page-footer pc-hidden'>
            2023 COPY RIGHT@PANDAPUNK 2169 . BRON FOR PANDARENS
          </div>
        </div>
      </main>
    </footer>
  )
}
