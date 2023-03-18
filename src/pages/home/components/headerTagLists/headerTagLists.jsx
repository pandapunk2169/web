import React, { useEffect, useState } from 'react'
import './headerTagLists750.scss'
function IconLi({ setShowTitle }) {
  // const IconData = ['twitter', 'discord', 'wallet']
  const IconData = ['twitter']
  const close = () => {
    location.href = "https://twitter.com/PandaPunk2169";
    setShowTitle(false)
  }
  return (
    <div className='icon-wrap'>
      {IconData.map((item) => (
        <img
          className='icon-img'
          key={item}
          src={`/imgs/pc/${item}-btn.png`}
          alt='btn'
          onClick={close}
        ></img>
      ))}
    </div>
  )
}
function TagLi({ setShowTitle }) {
  const data = [
    { name: 'ABOUT', id: '#about' },
    { name: 'REVELATION', id: '#revelation' },
    { name: 'VISION', id: '#vision' },
    { name: 'ECOSYSTEM', id: '#ecosystem' },
    { name: 'HEROS', id: '#heros' },
    { name: 'FAQ', id: '#faq' },
  ]
  const close = () => {
    setShowTitle(false)
  }
  return data.map((item) => (
    <li onClick={close} key={item.id}>
      <a href={item.id}>{item.name}</a>
    </li>
  ))
}
export default function headerTagLists({ show, setShowTitle }) {
  const [clientWidth, setClientWidth] = useState(0)
  useEffect(() => {
    setClientWidth(document.documentElement.clientWidth)
  }, [clientWidth])

  return (
    <div>
      {clientWidth > 760 ? (
        <ul className='tag-lists'>
          <TagLi />
        </ul>
      ) : (
        <div className={`app-tag-lists ${show ? 'show' : 'hidden'}`}>
          <div className='tag-lists-wrap'>
            <img
              className='main-bg'
              src='/imgs/app/header-lists-bg.png'
              alt=''
            />
            <div className='main-wrap'>
              <ul className='tag-lists'>
                <TagLi setShowTitle={setShowTitle} />
              </ul>
              <IconLi setShowTitle={setShowTitle} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
