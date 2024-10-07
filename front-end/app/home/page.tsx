'use client'

import styles from './homePage.module.css'

import Header from '../ui/layout/components/header'
import Footer from '../ui/layout/components/footer'
import CallsHistory from '../ui/home/components/history'
import CallState from '../ui/home/components/callState'
import BasicInfo from '../ui/home/components/basicInfo'
import Notes from '../ui/home/components/notes'
import { SubmitButton } from '../ui/gadjets/components/buttons'
import Reminder from '../ui/home/components/reminder'

import { CallInfoType } from '../definitions'
import { callInfoMock } from '../mocks/callInfo'

import { useId } from 'react'
// 

export default function Home() {
  const callInfo: CallInfoType = callInfoMock

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.callState}>
          <CallState />
        </div>
        <div className={styles.section}>
          <div className={styles.feedback}>
            <div className={styles.forms}>
              <BasicInfo basicInfo={callInfo.basicInfo}/>
              <Notes />
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttonSection}>
                <SubmitButton
                  id={useId()}
                  message='Submit'/>
                <SubmitButton
                  id={useId()}
                  message='Reset'/>
              </div>
              <div className={styles.buttonSection}>
                <Reminder />
                <SubmitButton
                  id={useId()}
                  message='Make a reminder'/>
              </div>
            </div>
          </div>

          <CallsHistory calls={callInfo.calls}/>
        </div>
      </main>

      <Footer />
    </>
  )
}