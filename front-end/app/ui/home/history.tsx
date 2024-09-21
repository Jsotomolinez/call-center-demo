import styles from './history.module.css'

export default function CallsHistory() {
  const calls = [
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'}
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Calls history
      </h2>
        <ul>
          {
            calls.map((call, index) => (
              <li
                key={index}
                className={styles.element}
                >
                {call.date} {call.time}
              </li>
            ))
          }
        </ul>
    </div>
  )
}