import React, {ChangeEvent} from 'react'
import cx from "classnames"
import style from "./FormInput.module.css"

type Props = {
  label: string
  type?: string
  name: string
  onChange(e: ChangeEvent<HTMLInputElement>): void
  value: string | number
  icon?: string
}

const FormInput: React.FC<Props> = ({ label, type = 'text', name, onChange, value, icon  }) => {
  return (
    <div className={cx('form-group', style.formGroup)}>
      <label className="w-100">
        {label}
        <input
          type={type}
          name={name}
          className={cx('form-control', style.input)}
          value={value}
          onChange={onChange}
        />
        {icon ? (<i className={cx('fas', icon, style.icon)} />) : null}
      </label>
    </div>
  )
}

export default FormInput
