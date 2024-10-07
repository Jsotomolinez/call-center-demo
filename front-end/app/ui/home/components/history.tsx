import { DateTimeType } from '@/app/definitions'
import styles from '../styles/history.module.css'

export default function CallsHistory(
  {calls}: {calls: DateTimeType[]}
) {

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
                <strong>Date: </strong>{call.date}, <strong>Time: </strong>{call.time}
              </li>
            ))
          }
        </ul>
    </div>
  )
}