import classes from './Checkbox.module.scss'

export default function Checkbox({ children, checked, onChange }) {
  return (
    <label className={`${classes.checkbox}`}>
      <span className={`${classes.checkbox__wrap}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`${classes.checkbox__input}`}
          name=""
          id=""
        />
      </span>
      <span className={`${classes.checkbox__title}`}>{children}</span>
    </label>
  )
}
