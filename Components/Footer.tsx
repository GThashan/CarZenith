import React from 'react'

function Footer() {
  return (
    <>
    <hr />
    <div className='grid grid-cols-3 lg:grid-cols-4 mt-8 px-6 mx-auto text-center gap-4 pb-3'>
      <div>
        <h1 className='font-bold text-[14px] pb-3'>CARZENITH</h1>
        <div>
          <ul className='text-gray-500 text-[13px] '>
            <li>Carzenith</li>
            <li>All right researved 2023</li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-[14px] pb-3'>ABOUT</h1>
        <div>
          <ul className='text-gray-500 text-[13px]'>
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-[14px] pb-3'>COMPANY</h1>
        <div>
          <ul className='text-gray-500 text-[13px]'>
            <li>Event</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Inveite a friend</li>
          </ul>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-[14px] pb-3'>SOCIAL</h1>
        <div>
          <ul className='text-gray-500 text-[13px]'>
            <li>Discode</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

    </div>
     <hr />
    <div className='p-4 text-center text-[12px]'>
      <p>@2023 carzenith - @copyright carzenith</p>
    </div>
    </>
  )
}

export default Footer
