import Fr4nkd3v from '~/components/Logo/Fr4nkd3v';
import css from './styles.module.css'

export default function BrandBox() {
  return (
    <div className={css.box}>
      <div className={css.wrapper}>
        <Fr4nkd3v styles={{height: '100%'}} />
      </div>
    </div>
  )
}
