
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import styles from "../styles/themeToggler.module.css"

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label='Toggle Dark Mode'
        className={styles.button__toggler}
      >
        <span className={styles.button__icon}>{theme === 'light' ? '🌞' : '🌚'}</span>
      </button>
    )
}
