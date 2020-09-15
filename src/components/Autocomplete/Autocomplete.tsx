import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import style from './Autocomplete.module.css'

type Props = {
  editedQuiz: string
  data: string[]
  tags: string[]
  onAddQuizTags: (quizUuid: string, tag: string) => void
  onRemoveQuizTags: (quizUuid: string, tag: string) => void
}

const Autocomplete: React.FC<Props> = ({ data, tags, onAddQuizTags, onRemoveQuizTags, editedQuiz }) => {
  const [value, setValue] = useState('')
  const input = useRef() as MutableRefObject<HTMLInputElement>

  const suggestions = useMemo(() => {
    return data.filter((item) => item.startsWith(value) && !tags.some((value) => value === item))
  }, [data, value, tags])

  useEffect(() => {
    input.current.focus()
  }, [input, tags])

  const onChange = useCallback((e) => setValue(e.target.value), [setValue])

  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        if (tags.some((item) => item === value)) {
          setValue('')
        } else {
          onAddQuizTags(editedQuiz, value)
          setValue('')
        }
      }
      if (e.keyCode === 8 && !value && tags.length > 0) {
        onRemoveQuizTags(editedQuiz, tags.pop() as string)
      }
    },
    [value, tags, onAddQuizTags, setValue]
  )

  const onTagCloseBtnClick = useCallback(
    (item) => {
      onRemoveQuizTags(editedQuiz, item)
    },
    [onRemoveQuizTags, tags, editedQuiz]
  )

  const onSuggestItemClick = useCallback(
    (item) => {
      onAddQuizTags(editedQuiz, item)
      setValue('')
    },
    [setValue, onAddQuizTags, tags, editedQuiz]
  )

  return (
    <>
      <div className={style.container}>
        {tags.map((item) => (
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
      {value && suggestions.length > 0 && (
        <div className={style.dropdown}>
          {suggestions.map((item) => (
            <button className={style.dropdown__item} onClick={() => onSuggestItemClick(item)} key={item}>
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Autocomplete
