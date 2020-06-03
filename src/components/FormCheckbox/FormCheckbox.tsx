import React from 'react'
import { useField } from 'formik'
import style from './FormCheckbox.module.css'

type Props = {
  children: any
  name: string
}

const FormCheckbox: React.FC<Props> = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <div className="form-group">
      <div className="checkbox-single">
        <label className="checkbox checkbox-success">
          <input type="checkbox" checked={field.value} {...field} {...props} />
          <span />
          <div className={style.content}>{children}</div>
        </label>
      </div>
    </div>
  )
}

export default FormCheckbox
