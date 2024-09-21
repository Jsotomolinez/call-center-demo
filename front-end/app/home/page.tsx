import styles from './homePage.module.css'

import Header from '@/app/ui/layout/header'
import Footer from '../ui/layout/footer'
import CallsHistory from '../ui/home/history'
import CallState from '../ui/home/callState'
import BasicInfo from '../ui/home/basicInfo'
import Notes from '../ui/home/notes'
import { SubmitButton } from '../ui/home/buttons'


export default function Home() {
  return (
    <main>
        <Header />
        <main className={styles.main}>
          <div className={styles.callState}>
            <CallState />
          </div>
          <div className={styles.section}>
            <div className={styles.feedback}>
              <div className={styles.forms}>
                <BasicInfo />
                <Notes />
              </div>
              <div className={styles.buttons}>
                <SubmitButton message='Submit'/>
                <SubmitButton message='Reset'/>
                <SubmitButton message='Una fecha'/>
                <SubmitButton message='Make a reminder'/>
              </div>
            </div>

            <CallsHistory />
          </div>
        </main>

        <Footer />
    </main>
  )
}