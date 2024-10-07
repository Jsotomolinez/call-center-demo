'use client'
import styles from '../styles/callState.module.css'

import { CloseCall, Mute, Pause, Play, UnMute } from '../../gadjets/components/icons'
import { BinaryButton, SingleButton } from '../../gadjets/components/buttons'
import { useId } from 'react'

export default function CallState() {

  return (
    <div className={styles.container}>
      <ul className={styles.utilities}>
        <li>
          <SingleButton
            icon={<CloseCall />}
            id={useId()}/>
        </li>
        <li>
          <BinaryButton
            enabled={<Mute />}
            disabled={<UnMute />}
            id={useId()}/>
        </li>
        <li>
          <BinaryButton
            enabled={<Pause />}
            disabled={<Play />}
            id={useId()}/>
        </li>
      </ul>
      <p>Outgoing call for: Jhon Doe</p>
      <p>01:15</p>
    </div>
  )
}