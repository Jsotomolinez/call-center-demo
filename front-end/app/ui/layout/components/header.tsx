
import styles from '../styles/header.module.css'

import Link from 'next/link'
// import Image from 'next/image'

import { Phone, Bell, Options, User } from '../../gadjets/components/icons'
import DarkModeSwitch from '../../gadjets/components/buttons'
import SearchBar from '../../gadjets/components/searchBar'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link 
            href='/home'>
              {/* <Image
                src='@\public\1n2(3).png'
                alt='App logo'
                width={10}
                height={10}
              /> */}
              Home
          </Link>
        </div>
        
        <div>
            <SearchBar />
        </div>

        <ul className={styles.utilities}>
            <li className={styles.link}>
                <Link
                    href='/home/make-a-call'>
                        <Phone />
                </Link>
            </li>
            <li className={styles.link}>
                <Link
                    href='/home/reminders'>
                        <Bell />
                </Link>
            </li>

            <li className={styles.link}>
                <Link
                    href='/home/options'>
                        <Options />
                </Link>
            </li>

            <li className={styles.link}>
                <DarkModeSwitch />
            </li>
            
            <li className={styles.link}>
                <Link
                    href='/home/user'>
                        <User />
                </Link>
            </li>
        </ul>
      </nav>
    </header>
    )
}