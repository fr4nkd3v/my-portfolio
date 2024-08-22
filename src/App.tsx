import BrandBox from '~/components/BrandBox/index';
import Menu from '~/components/Menu';
import css from './App.module.css';
// import { ThemeTypes } from './types';

function App() {
  // const [ theme, setTheme] = useState<ThemeTypes>('light');

  return (
    <div className={css.layout}>
      <BrandBox />
      <Menu />
      <h1>Welcome to my portfolio</h1>
    </div>
  )
}

export default App
