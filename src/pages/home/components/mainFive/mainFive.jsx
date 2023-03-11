import React from 'react'
import './mainFive750.scss'

export default function mainFive() {
  return (
    <main className='main-five' id='vision'>
      <img className='main-bg' src='/imgs/app/main-bg5.png' />
      <img className='big-main-bg' src='/imgs/pc/main-bg5.png' />

      <div className='main-wrap'>
        <div className='vision-desc-wrap'>
          <div className='title'>
            PALADIN'S VISION
          </div>
          <p className='desc'>
            Paladin is the leader of a mutant panda tribe, who is good at
            transforming machines with the power of technology. He has injected
            new hope into panda civilization. He is a legendary hero.
            <br />
            <br />
            He hopes to create a metaverse of Panda Punk 2169 and lead his
            pandaren to the light. Fight for Pandaren.
          </p>
        </div>
        <img
          className='big-hero app-hidden'
          src='/imgs/pc/big-hero.png'
        />
      </div>
    </main>
  )
}
