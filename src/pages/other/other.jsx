import React from "react"
import "./other.scss"
const bg_url_lists = [
  "/imgs/app/main-bg.png",
  "/imgs/app/main-bg2.png",
  "/imgs/app/main-bg3.png",
  "/imgs/app/main-bg4.png",
]
export default function other() {
  return (
    <div className='other-container md:pc'>
      {/* <main className='bg-wrap'>
        {bg_url_lists.map((item) => (
          <img className='bg-img' src={item} />
        ))}
      </main> */}
      <main className='main-one'>
        <img className='main-bg' src='/imgs/app/main-bg.png' />
        <div className='wrap'>1</div>

      </main>
      <main className='main-two'>
        <img className='main-bg' src='/imgs/app/main-bg2.png' />
        <div className='wrap'>2</div>
      </main>
      <main className='main-three'>
        <img className='main-bg' src='/imgs/app/main-bg3.png' />
        <div className='wrap'>3</div>
      </main>
      <main className='main-four'>
        <img className='main-bg' src='/imgs/app/main-bg4.png' />
        <div className='wrap'>4</div>
      </main>
    </div>
  )
}
