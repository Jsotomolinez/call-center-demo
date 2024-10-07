import styles from '../styles/notes.module.css'

export default function Notes() {
  const options = [
    'Owns a ws',
    'Home ownership',
    'Lenguajes',
    'Available at'
  ]

  return (
    <form className={styles.container}>
      <h2 className={styles.title}>
        Notes
      </h2>
        <div className={styles.content}>
          <textarea
            name="general notes"
            placeholder='General notes'
            className={styles.textArea}
            ></textarea>
          <ul className={styles.questions}>
            {
              options.map((option) => (
                <li
                  key={option}
                  className={styles.element}>
                  <label htmlFor={option}>
                    <strong>{option}:</strong>
                    </label>
                  <input type="text"
                    name={option}
                    className={styles.input}/>
                </li>
              ))
            }
          </ul>
        </div>
    </form>
  )
}