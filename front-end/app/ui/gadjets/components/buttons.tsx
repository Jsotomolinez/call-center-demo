'use client'

import styles from '../styles/buttons.module.css'

import { useState, useEffect, ReactElement } from 'react'

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="flex items-center justify-centers transition-colors duration-300">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="w-14 h-8 bg-gray-300 rounded-full shadow-inner"></div>
          <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out ${darkMode ? 'transform translate-x-6' : ''}`}></div>
        </div>
      </label>
    </div>
  )
}

export function SubmitButton({message, id}:
  {message: string, id: string}) {
  const btn = document.getElementById(id)

  const handleClick = () => {
    btn?.blur()
  }
  return (
    <button
    id={id}
    onClick={handleClick}
    className={styles.button}>
      <span>
        {message}
      </span>
    </button>
  )
}


export function BinaryButton({enabled, disabled, id}:
  {enabled: ReactElement, disabled: ReactElement, id: string}) {
  const [active, setActive] = useState(false)
  const btn = document.getElementById(id)

  const handleClick = () => {
    setActive(!active)
    btn?.blur()
  }

  return (
    <button
      id={id}
      onClick={handleClick}
      className={styles.callStateButton}>
        {active? enabled: disabled}
    </button>
  )
}

export function SingleButton({icon, id}:
  {icon: ReactElement, id: string}) {
  const btn = document.getElementById(id)

  const handleClick = () => {
    btn?.blur()
  }

  return (
    <button
      id={id}
      onClick={handleClick}
      className={styles.callStateButton}>
        {icon}
    </button>
  )
}