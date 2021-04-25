import Link from 'next/link'

import Nav from './Nav'
import styles from '@/styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a>Pronti per il test B1</a>
        </Link>
      </div>
      <Nav />
    </header>
  )
}

export default Header