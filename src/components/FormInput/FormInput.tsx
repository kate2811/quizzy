import React, { useCallback, useMemo, useState} from 'react'
import cx from 'classnames'
import style from './FormInput.module.css'
import { useField } from 'formik'

type Props = {
  label: string
  type?: string
  name: string
  icon?: string
  id: string
}

const FormInput: React.FC<Props> = ({ label, icon, name, type = 'text', id }) => {
  const [field, meta] = useField({name, type, id})
  const [inputType, setInputType] = useState(type)

  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      setInputType(inputType === 'password' ? 'text' : 'password')
    },
    [setInputType, inputType]
  )

  const inputClassName = useMemo(() => {
    return cx('form-control', style.input, meta.touched && (meta.error ? 'is-invalid' : 'is-valid'))
  }, [meta.touched, meta.error])

  return (
    <div className={cx('form-group', style.formGroup)}>
      <label className="w-100">
        {label}
      <input className={inputClassName} type={inputType} {...field}  name={name} id={id} />
        {meta.touched && meta.error ? <div className={cx("invalid-feedback", style.inputFeedback)}>{meta.error}</div> : null}
      </label>

      {icon ? <i className={cx('fas', icon, style.icon)} /> : null}

      {type === 'password' ? (
        <button onClick={onClick} className={style.button_icon}>
          <i className={cx('fas', inputType === 'password' ? 'fa-eye' : 'fa-eye-slash', style.icon_visible)} />
        </button>
      ) : null}

    </div>
  )
}

export default FormInput
