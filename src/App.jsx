import React, { useEffect } from 'react'
import EmojiWeb from './pages/EmojiWeb'
import Cursor from './components/Cursor'
import LocomotiveScroll from 'locomotive-scroll';
import Landing from './pages/Landing';

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
    <main className='relative w-full min-h-screen'>
      <Cursor />
      <EmojiWeb />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
      <Landing />
    </main>
  )
}

export default App