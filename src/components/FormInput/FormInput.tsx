import React, { ChangeEvent, useCallback, useState } from 'react'
import cx from 'classnames'
import style from './FormInput.module.css'

type Props = {
  label: string
  type?: string
  name: string
  onChange(e: ChangeEvent<HTMLInputElement>): void
  value: string | number
  icon?: string
}

const FormInput: React.FC<Props> = ({ label, type = 'text', name, onChange, value, icon }) => {
  const [inputType, setInputType] = useState(type)

  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      setInputType(inputType === 'password' ? 'text' : 'password')
    },
    [setInputType, inputType]
  )

  return (
    <div className={cx('form-group', style.formGroup)}>
      <label className="w-100">
        {label}
        <input
          type={inputType}
          name={name}
          className={cx('form-control', style.input)}
          value={value}
          onChange={onChange}
        />

        {icon ? <i className={cx('fas', icon, style.icon)} /> : null}

        {type === 'password' ? (
          <button onClick={onClick} className={style.button_icon}>
            <i
              className={cx(
                'fas',
                inputType === 'password' ? 'fa-eye' : 'fa-eye-slash',
                style.icon_visible
              )}
            />
          </button>
        ) : null}
      </label>
    </div>
  )
}

export default FormInput
