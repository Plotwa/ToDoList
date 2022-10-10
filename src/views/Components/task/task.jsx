import styles from './task.module.scss'
 import { deleteTaskActioncreator } from '../../../data/store/app-reducer'
import { useDispatch } from 'react-redux'
const Task =({task}) =>{
    const dispatch =useDispatch()
    return (
    <div className ={styles.task}>
        <div>{task.title}</div>
        <button onClick ={()=>dispatch(deleteTaskActioncreator(task.id)) }>Удалить </button>
    </div>
    )
}
export default  Task