import React, {useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { createTaskActionCreator } from '../../data/store/app-reducer'
import styles from './Inputplus.module.scss'

type PropsType = {
  onAdd: (title:string) => void
}

const InputPlus:React.FC<PropsType> = ({onAdd}) => {
  const dispatch =useDispatch()
  const [inputValue, setInputValue] = useState('')
  const addTask = useCallback(()=>{
    onAdd(inputValue)
    dispatch(createTaskActionCreator(inputValue))
    setInputValue('')
  },[inputValue])
  return (
    <div>
      <div className={styles.inputPlus}>
        <input 
          type="text"
          className={styles.inputPlusValue}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <button 
        onClick={addTask}
        aria-label="Add"
        className={styles.inputPlusButton}
        >Введите текст Свиньи</button>
      </div>
    </div>
  );
}

export default InputPlus;