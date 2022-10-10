import React from 'react'
import Inputplus from '../Components/Inputplus';
import styles from './todo.module.scss'
import {createTaskActionCreator, getTasks} from '../../data/store/app-reducer';
import store from '../../data/store/store';
import { useSelector } from 'react-redux';
import Task from '../Components/task/task';
function App() {
  const tasks = useSelector(getTasks)
  
  return (
    <div className='App'>
      <article className={styles.article}>
        <h1 className={styles.articleTittle}>Приложение ToDoList</h1>
        <section className={styles.articleSection}>
          <Inputplus onAdd={(title)=>{
            
            
            createTaskActionCreator(title)
          
         } }/>
          </section>
        <section className={styles.articleSection}>tasks:{tasks.map(task => <Task task = {task}/>)}</section>
        </article>
    </div>
  );
}

export default App;

