import React, { useMemo } from 'react'
import cx from 'classnames'
import style from './FormInput.module.css'
import { useField } from 'formik'

type Props = {
  label?: string
  type?: string
  name: string
  placeholder?: string
  id: string
}

const FormInput: React.FC<Props> = ({ label, name, type = 'text', id, placeholder }) => {
  const [field, meta] = useField({ name, type, id })

  const inputClassName = useMemo(() => {
    return cx(
      'form-control form-control-solid h-auto py-7 px-6 rounded-lg',
      style.input,
      meta.touched && (meta.error ? 'is-invalid' : 'is-valid')
    )
  }, [meta.touched, meta.error])

  return (
    <div className="form-group">
      {label && (
        <label className="font-size-h6 font-weight-bolder text-dark w-100" htmlFor={id}>
          {label}
        </label>
      )}
      <input className={inputClassName} type={type} {...field} name={name} id={id} placeholder={placeholder} />
      {meta.touched && meta.error ? (
        <div className={cx('invalid-feedback', style.inputFeedback)}>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default FormInput
