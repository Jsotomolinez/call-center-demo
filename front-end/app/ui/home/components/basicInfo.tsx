import styles from '../styles/basicInfo.module.css'

import { BasicInfoType } from '@/app/definitions'



export default function BasicInfo(
  {basicInfo}: {basicInfo: BasicInfoType[]}
) {
  
  return (
    <form className={styles.container}>
      <h2 className={styles.title}>
        Basic info
      </h2>
        <ul className={styles.data}>
          {
            basicInfo.map(data => (
              <li
                key={data.field}
                className={styles.element}
              >
                <div>
                  <input type="radio" name={data.field} value="true"/>
                  <input type="radio" name={data.field} value="null" defaultChecked/>
                  <input type="radio" name={data.field} value="false"/>
                </div>
                <label htmlFor={data.field}>
                  <strong>{data.field}:</strong> {data.value}
                </label>
              </li>
            ))
          }
        </ul>
    </form>
  )
}