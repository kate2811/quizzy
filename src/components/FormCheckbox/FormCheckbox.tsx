import React from 'react'
import { useField } from 'formik'

type Props = {
  children: any
  name: string
}

const FormCheckbox: React.FC<Props> = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <div className="form-check">
      <label className="form-check-label text-secondary">
        <input className="form-check-input" type="checkbox" checked={field.value} {...field} {...props} />
        {children}
      </label>
    </div>
  )
}

export default FormCheckbox
