import styles from '../styles/reminder.module.css'

export default function Reminder() {
  return (

    <form
      action=""
      className={styles.container}>
      <div>
        <label htmlFor="date">Reminder date </label>
        <input type="date" name="date"/>
      </div>

      <div>
        <label htmlFor="time">Reminder hour </label>
        <input type="time" name="time"/>
      </div>

      <div className={styles.radioContainer}>
        <div>
          <label htmlFor="time-type">Client local time</label>
          <input type="radio" name="time type" value='client local time'/>
        </div>

        <div>
          <label htmlFor="time-type">My local time</label>
          <input type="radio" name="time type" value='My local time'/>
        </div>
      </div>
    </form>
  )
}