import styles from './buttons.module.css'

export function SubmitButton({message}: {message: string}) {
  return (
    <button className={styles.button}>
      <span>
        {message}
      </span>
    </button>
  )
}