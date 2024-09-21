import styles from './basicInfo.module.css'

export default function BasicInfo() {
  const calls = [
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'},
    {date: '12/06/2024', time: '1600'}
  ]

  return (
    <form className={styles.container}>
      <h2 className={styles.title}>
        Basic info
      </h2>
        <ul className={styles.data}>
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
    </form>
  )
}