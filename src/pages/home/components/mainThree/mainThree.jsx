import React, { useState, useEffect } from 'react'
import { avaLists1, avaLists2, avaLists3 } from '@pages/common/base-mock'
import './mainThree750.scss'

export default function mainThree() {
  const [mavaLists, setMavaLists] = useState([])
  const [clientWidth, setClientWidth] = useState(0)
  useEffect(() => {
    const curW = document.documentElement.clientWidth
    if (curW > 750) {
      setMavaLists([
        ...avaLists1, 
        ...avaLists2,
        ...avaLists3,
      ])
    } else {
      setMavaLists(avaLists1)
    }
    setClientWidth(curW)
  }, [clientWidth])

  return (
    <main className='main-three' id="revelation">
      <img className='main-bg' src='/imgs/app/main-bg3.png' />
      <img className='big-main-bg' src='/imgs/pc/main-bg3.png' />
      <div className='main-wrap'>
        <p className='title'>Nuclear Explosion</p>
        <div className='ava-lists-wrap'>
          <div className='ava-lists-content'>
            <div className='ava-lists ava-item-one'>
              {mavaLists.map((item) => (
                <li>
                  <img className='ava-item' src={item} key={item} />
                </li>
              ))}
              <img className='ava-item ava-item-none-750' src='/imgs/ava/2-1.png' key='2-1' />
              <img className='ava-item ava-item-none-750' src='/imgs/ava/2-2.png' key='2-2' />
              <img className='ava-item ava-item-none-750' src='/imgs/ava/2-3.png' key='2-3' />
              <img className='ava-item ava-item-none-750' src='/imgs/ava/2-4.png' key='2-4' />
            </div>
            <div className='ava-lists ava-item-two'>
              {mavaLists.map((item) => (
                <li>
                  <img className='ava-item' src={item} key={item} />
                </li>
              ))}
            </div>
            <div className='ava-lists ava-item-three'>
              {mavaLists.map((item) => (
                <li>
                  <img className='ava-item' src={item} key={item} />
                </li>
              ))}
            </div>
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
