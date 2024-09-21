import styles from './header.module.css'
import Link from 'next/link'
import { Phone, Bell, Options, User } from '../icons'
import DarkModeSwitch from '../buttons'
import SearchBar from '../searchBar'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link 
            href='/home'>
                ☎️
          </Link>
          <Link 
            href='/home'>
                Home
          </Link>
        </div>
        
        <div>
            <SearchBar />
        </div>

        <ul className={styles.utilities}>
            <li>
                <Link
                    href='/home/make-a-call'>
                        <Phone />
                </Link>
            </li>
            <li>
                <Link
                    href='/home/reminders'>
                        <Bell />
                </Link>
            </li>
            <li>
                <Link
                    href='/home/options'>
                        <Options />
                </Link>
            </li>
            <li>
                <DarkModeSwitch />
            </li>
            <li>
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