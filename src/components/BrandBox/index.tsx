import { Fr4nkd3vLogo } from '~/components/Logo/Fr4nkd3vLogo';
import css from './styles.module.css'

const BrandBox = () => {
  return (
    <div className={css.box}>
      <div className={css.wrapper}>
        <Fr4nkd3vLogo styles={{height: '100%'}} />
      </div>
    </div>
  )
}

export default BrandBox;