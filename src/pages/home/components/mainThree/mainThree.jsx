import React, { useState, useEffect } from 'react'
import { avaLists } from '@pages/common/base-mock'
import './mainThree750.scss'

export default function mainThree() {
  const [mavaLists, setMavaLists] = useState([])
  const [clientWidth, setClientWidth] = useState(0)
  useEffect(() => {
    const curW = document.documentElement.clientWidth
    if (curW > 750) {
      setMavaLists([...avaLists, ...avaLists, ...avaLists, ...avaLists])
    } else {
      setMavaLists(avaLists)
    }
    setClientWidth(curW)
  }, [clientWidth])

  return (
    <main className='main-three'>
      <img className='main-bg' src='/imgs/app/main-bg3.png' />
      <img className='big-main-bg' src='/imgs/pc/main-bg3.png' />
      <div className='main-wrap'>
        <p className='title'>Nuclear Explosion</p>
        <div className='ava-lists-wrap'>
          <div className='ava-lists'>
            {mavaLists.map((item) => (
              <li>
                <img className='ava-item' src={item} key={item} />
              </li>
            ))}
          </div>
        </div>
        <div className='r-l-wrap flex'>
          <img className='left' src='/imgs/ava/left.png' />
          <img className='right' src='/imgs/ava/right.png' />
        </div>
      </div>
    </main>
  )
}
