import Link from 'next/link'

import styles from '@/styles/Nav.module.css';

function Nav() {
  const navItems = [
    { id: "01", name: "About", url: "/about", isVisible: true },
    { id: "02", name: "Acquista", url: "/acquista", isVisible: true },
    { id: "03", name: "Trascrizioni", url: "/trascrizioni", isVisible: true }
  ]

  return (
    <nav>
      <ul className={styles.nav}>
      {navItems.map(item => (
        <li key={item.id}>
          <Link href={item.url}>
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
      </ul>
    </nav>
  )
}

export default Nav