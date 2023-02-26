import React from "react"
import { historyLists } from "@pages/common/base-mock"
import "./mainFour750.scss"

export default function mainFour() {
  return (
    <main className='main-four'>
      <img className='main-bg' src='/imgs/app/main-bg4.png' />
      <img className='big-main-bg' src='/imgs/pc/main-bg4.png' />
      <div className='main-wrap '>
        <p className='title'>THE HISTORY OF PANDARENS.</p>
        <div className='light-wrap flex flex-col items-center justify-center'>
          <img className="pc-hidden" src='/imgs/app/light.png' />
          <img className="app-hidden" src='/imgs/app/dark.png' />

          <div className='text-wrap flex'>
            <span className='green-t self-start'>LIGHT:</span>
            <span className='desc'>Friendship Trade and Cooperation whit other planets.</span>
          </div>
        </div>
        <div className='dark-wrap flex flex-col items-center justify-center'>
          <img src='/imgs/app/dark.png' />
          <div className='text-wrap flex'>
            <span className='green-t self-start'>DARK:</span>
            <span className='desc'>War Killing and Destroy other races.</span>
          </div>
        </div>
        <ul className='history-lists'>
          {historyLists.map((h, hi) => (
            <li className='history-item' key={h.title}>
              <img className='top' src={`/imgs/history/${hi + 1}.png`} />
              <div className='bottom'>{h.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
