import { BrandBox } from '~/components/BrandBox/BrandBox';
import { Menu } from '~/components/Menu/Menu';
import css from './App.module.css';

function App() {
  return (
    <div className={css.layout}>
      <BrandBox />
      <Menu />
      <h1>Welcome to my portfolio</h1>
    </div>
  )
}

export default App
