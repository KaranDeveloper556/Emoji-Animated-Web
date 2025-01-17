import React, { useEffect } from 'react'
import Cursor from './components/Cursor'
import LocomotiveScroll from 'locomotive-scroll';
import Landing from './pages/Landing';
import Nav from './components/sections/Nav';

const App = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      <main className='mx-auto pt-[5rem]'>
        <Landing />
      </main>
    </>
  )
}

export default App
