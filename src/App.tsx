// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { getSystemTheme, setTheme, getTheme } from '~/utils/index';
import BrandBox from '~/components/BrandBox/index';
import Menu from '~/components/Menu';
import css from './App.module.css';

function App() {

  setTheme(getSystemTheme());

  return (
    <div className={css.layout}>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <BrandBox />
      <Menu />
      <h1>Welcome to my portfolio</h1>
      <button onClick={() => setTheme(getTheme() === 'light' ? 'dark' : 'light')}>Cambiar de tema</button>
    </div>
  )
}

export default App
