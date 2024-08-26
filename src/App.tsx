import css from './App.module.css';
import { BrandBox } from '~/components/BrandBox/BrandBox';
import { Menu } from '~/components/Menu/Menu';

function App() {
  return (
    <div className={css['App-container']}>
      <div className={css['App-background']}>
        <div className={css['App-background-ellipse']}></div>
        <div className={css['App-background-ellipse']}></div>
        <div className={css['App-background-ellipse']}></div>
        <div className={css['App-background-ellipse']}></div>
      </div>
      <div className={css['App-layout']}>
        <BrandBox />
        <Menu />
        <h1>Welcome to my portfolio</h1>
      </div>
    </div>
  )
}

export default App
