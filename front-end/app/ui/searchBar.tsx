"use client"

import { useState } from 'react'
import { Search } from './icons'
import styles from './searchBar.module.css'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Here you would typically call an API or perform a search operation
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.searchBar}>
          <input
            type="text"
            className={styles.input}
            // className="w-full px-4 py-2 text-gray-900 rounded-l-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search a client name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            // className="px-4 py-4 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            className={styles.button}
          >
            <Search />
          </button>
      </form>
    </div>
  )
}