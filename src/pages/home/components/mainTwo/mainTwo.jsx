import React from 'react'
import './mainTwo750.scss'
export default function mainTwo() {
  return (
    <main className='main-two'>
      <img className='main-bg' src='/imgs/app/main-bg2.png' />
      <img className='big-main-bg' src='/imgs/pc/main-bg2.png' />

      <div className='main-wrap main-float flex flex-col items-center'>
        <p className='f-title'>JION THE PANDA UNIVERSE</p>
        <p className='s-title'>ARE YOU MUTANT PANDA?</p>
        <div className='btn-wrap app-hidden'>
          <img className='twitter-btn' src='/imgs/pc/twitter-btn.png' />
          <img src='/imgs/pc/discord-btn.png' />
        </div>
        <img className='twitter-btn pc-hidden' src='/imgs/pc/twitter-btn.png' />
        <img className='pc-hidden' src='/imgs/pc/discord-btn.png' />
      </div>
    </main>
  )
}
