import React from 'react'
import { heroLists } from '@pages/common/base-mock'
import './heroLists.scss'
export default function HeroLists() {
  return (
    <ul className='hero-lists app-hidden'>
      <div className='li-wrap flex'>
        <li className='one-items'>
          <div className='items-title'>{heroLists[0].name}</div>
          <ul className='img-wrap grid grid-cols-4 gapx-60px'>
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
        <div className='grid grid-cols-2 gap-x-4'>
          <li className='two-items'>
            <div className='items-title'>{heroLists[1].name}</div>
            <ul className='img-wrap grid grid-cols-2 gapx-38px'>
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
            <ul className='img-wrap grid grid-cols-2 gapx-60px pad-68px'>
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
      </div>

      <li className='eight-items'>
        <div className='items-title'>{heroLists[3].name}</div>
        <ul className='img-wrap grid grid-cols-8 gapx-60px'>
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

      <li className='nine-items'>
        <div className='items-title'>{heroLists[4].name}</div>
        <ul className='img-wrap grid grid-cols-9 gapx-60px'>
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

      <li className='six-items'>
        <div className='items-title'>{heroLists[5].name}</div>
        <ul className='img-wrap grid grid-cols-6 gapx-60px'>
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
  )
}
