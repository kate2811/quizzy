import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import style from './Autocomplete.module.css'

const Autocomplete: React.FC = () => {
  const [value, setValue] = useState('')
  const [values, setValues] = useState<string[]>([])
  const suggests = ['abc', 'bcd', 'cvb', 'abcd', 'acc']
  const input = useRef() as MutableRefObject<HTMLInputElement>

  useEffect(() => {
    input.current.focus()
  }, [input, values])

  const onChange = useCallback((e) => setValue(e.target.value), [setValue])

  const onKeyDown = useCallback(
    (e) => {
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
    },
    [value, values, setValues, setValue]
  )

  const onTagCloseBtnClick = useCallback(
    (item) => {
      setValues(() => values.filter((value) => value !== item))
    },
    [setValues, values]
  )

  const onSuggestItemClick = useCallback(
    (item) => {
      setValues([...values, item])
      setValue('')
    },
    [setValue, setValues, values]
  )

  return (
    <>
      <div className={style.container}>
        {values.map((item) => (
          <span className={style.tag} key={item}>
            {item}
            <button className={style.tag__button_close} onClick={() => onTagCloseBtnClick(item)} />
          </span>
        ))}
        <input
          ref={input}
          className={style.input}
          type="text"
          value={value}
          placeholder="Write some tags..."
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      {value && suggests.some((item) => item.startsWith(value)) && (
        <div className={style.dropdown}>
          {suggests.map((item) =>
            item.startsWith(value) && !values.includes(item) ? (
              <button className={style.dropdown__item} onClick={() => onSuggestItemClick(item)} key={item}>
                {item}
              </button>
            ) : null
          )}
        </div>
      )}
    </>
  )
}

export default Autocomplete
