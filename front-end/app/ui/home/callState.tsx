import styles from './callState.module.css'

export default function CallState() {
  return (
    <div className={styles.container}>
      <p>Outgoing call for: Jhon Doe</p>
      <p>01:15</p>
    </div>
  )
}