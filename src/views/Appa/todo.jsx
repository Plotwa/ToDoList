import React from 'react'
import Inputplus from '../Components/Inputplus';
import styles from './todo.module.scss'
import {createTaskActionCreator} from '../../data/store/app-reducer';
import store from '../../data/store/store';
function App() {
  let Tasks = store.getState().app.tasks

  return (
    <div className='App'>
      <article className={styles.article}>
        <h1 className={styles.articleTittle}>Приложение ToDoList</h1>
        <section className={styles.articleSection}>
          <Inputplus onAdd={(title)=>{
            
            
            createTaskActionCreator(title)
          
         } }/>
          </section>
        <section className={styles.articleSection}>Tasks:{Tasks.map(task=><div>{task.title}</div>)}</section>
        </article>
    </div>
  );
}

export default App;
