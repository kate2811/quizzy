import React, { useRef, useState } from 'react'
import style from './Autocomplete.module.css'

const Autocomplete: React.FC = () => {
  const [value, setValue] = useState('')
  const [values, setValues] = useState<string[]>([])
  const suggests = ['abc', 'bcd', 'cvb', 'abcd', 'acc']
  const dropdownItem = useRef(null)

  return (
    <div>
      <div className={style.container}>
        {values.map((item) => (
          <span className={style.tag} key={item}>
            {item}
            <button
              className={style.tag__button_close}
              onClick={() => setValues(() => values.filter((value) => value !== item))}
            />
          </span>
        ))}
        <input
          className={style.input}
          type="text"
          value={value}
          placeholder="Write some tags..."
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              if (values.some((item) => item === value)) {
                setValue('')
              } else {
                setValues([...values, value])
                setValue('')
              }
            }
            if (e.keyCode === 8 && !value) {
              setValues(() => values.slice(0, values.length - 1))
            }
          }}
        />
      </div>
      {value && suggests.some((item) => item.startsWith(value)) && (
        <div className={style.dropdown}>
          {suggests.map((item) =>
            item.startsWith(value) && !values.includes(item) ? (
              <button
                ref={dropdownItem}
                className={style.dropdown__item}
                onClick={() => {
                  setValues([...values, item])
                  setValue('')
                }}
                key={item}
              >
                {item}
              </button>
            ) : null
          )}
        </div>
      )}
    </div>
  )
}

export default Autocomplete
