import React from 'react'
import Inputplus from '../Components/Inputplus';
import styles from './todo.module.scss'
function App() {
  return (
    <div className='App'>
      <article className={styles.article}>
        <h1 className={styles.articleTittle}>Приложение ToDoList</h1>
        <section className={styles.articleSection}>
          <Inputplus />
          </section>
        <section className={styles.articleSection}></section>
        </article>
    </div>
  );
}

export default App;
